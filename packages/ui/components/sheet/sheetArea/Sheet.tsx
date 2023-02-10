import {
  useIsomorphicLayoutEffect,
  usePreventScroll,
  usePrevious,
  useWindowHeight,
} from '@weekly/utils';
import {
  animate,
  AnimatePresence,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from 'framer-motion';
import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import {
  DEFAULT_SPRING_CONFIG,
  DRAG_CLOSE_THRESHOLD,
  DRAG_VELOCITY_THRESHOLD,
} from '../constants';
import { SheetContext, SheetContextType } from '../context';
import styles from '../styles';
import { SheetCompound, SheetProps } from './types';

function getClosest(nums: number[], goal: number) {
  return nums.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
}

const BottomSheet = React.forwardRef<any, SheetProps>(
  (
    {
      onOpen,
      onOpened,
      onXClick,
      onClose,
      onClosed,
      onNavigate,
      onSnap,
      children,
      isOpen,
      snapPoints,
      rootId,
      mountElement,
      style,
      detent = 'full',
      disableDrag = false,
      ...rest
    },
    ref,
  ) => {
    // framer motion 이 ios 에서 제대로 동작하지 않아 사용
    const prevIsOpen = usePrevious(isOpen);
    React.useEffect(() => {
      if (isOpen) {
        onOpen?.();
      } else {
        if (prevIsOpen) onClose?.();
      }
    }, [isOpen]);

    usePreventScroll({ isDisabled: !isOpen });
    const sheetRef = React.useRef<any>(null);
    const windowHeight = useWindowHeight();
    const animationOptions: AnimationOptions<number> = {
      type: 'spring',
      ...DEFAULT_SPRING_CONFIG,
    };

    const y = useMotionValue(0);

    const callbacks = React.useRef({
      onOpen,
      onOpened,
      onClose,
      onClosed,
      onXClick,
      onNavigate,
    });

    useIsomorphicLayoutEffect(() => {
      callbacks.current = {
        onOpen,
        onOpened,
        onClose,
        onClosed,
        onXClick,
        onNavigate,
      };
    });

    if (snapPoints) {
      // 음수 snapPoint 를 양수로 변경
      snapPoints = snapPoints.map((point) => {
        if (point > 0 && point <= 1) return Math.round(point * windowHeight);
        return point < 0 ? windowHeight + point : point; // negative values
      });
    }

    const onDrag = useCallback((_: unknown, { delta }: PanInfo) => {
      y.set(Math.max(y.get() + delta.y, 0));
    }, []);

    const onDragEnd = useCallback((_: unknown, { velocity }: PanInfo) => {
      if (velocity.y > DRAG_VELOCITY_THRESHOLD) {
        // 사용자가 바텀시트를 빠르게 드래그하면 닫힘
        onXClick?.();
      } else {
        const sheetEl = sheetRef.current as HTMLDivElement;
        const sheetHeight = sheetEl.getBoundingClientRect().height;
        const currentY = y.get();

        let snapTo = 0;

        if (snapPoints) {
          const snapToValues = snapPoints
            .map((p) => sheetHeight - p)
            .filter((p) => p >= 0);
          snapTo = getClosest(snapToValues, currentY);
        } else if (currentY / sheetHeight > DRAG_CLOSE_THRESHOLD) {
          // threshold 를 넘으면 닫힘
          snapTo = sheetHeight;
        }

        snapTo = Math.max(Math.round(snapTo), 0);

        // 스프링 값을 업데이트하여 시트가 스냅 포인트로 돌아감
        animate(y, snapTo, animationOptions);

        if (snapPoints && onSnap) {
          const snapValue = Math.abs(Math.round(snapPoints[0] - snapTo));
          const snapIndex = snapPoints.indexOf(
            getClosest(snapPoints, snapValue),
          );
          onSnap(snapIndex);
        }

        if (snapTo >= sheetHeight) onXClick?.();
      }
    }, []);

    // 시트를 열거나 닫을 때 onSnap 콜백을 호출
    React.useEffect(() => {
      if (!snapPoints || !onSnap) return;
      const snapIndex = isOpen ? 0 : snapPoints.length - 1;
      onSnap(snapIndex);
    }, [isOpen]);

    React.useImperativeHandle(ref, () => ({
      y,
      snapTo: (snapIndex: number) => {
        const sheetEl = sheetRef.current as HTMLDivElement | null;

        if (
          snapPoints &&
          snapPoints[snapIndex] !== undefined &&
          sheetEl !== null
        ) {
          const sheetHeight = sheetEl.getBoundingClientRect().height;
          const snapPoint = snapPoints[snapIndex];
          const snapTo = Math.max(Math.round(sheetHeight - snapPoint));

          animate(y, snapTo, { type: 'spring' });
          if (onSnap) onSnap(snapIndex);
          if (snapTo >= sheetHeight) onXClick?.();
        }
      },
    }));

    const dragProps = React.useMemo(() => {
      const dragProps: SheetContextType['dragProps'] = {
        drag: 'y',
        dragElastic: 0,
        dragConstraints: { top: 0, bottom: 0 },
        dragMomentum: false,
        onDrag,
        onDragEnd,
      };

      return disableDrag ? undefined : dragProps;
    }, [disableDrag]);

    const context = {
      y,
      sheetRef,
      isOpen,
      snapPoints,
      detent,
      callbacks,
      dragProps,
      windowHeight,
      animationOptions,
    };

    const sheet = (
      <SheetContext.Provider value={context}>
        <div
          {...rest}
          ref={ref}
          role="dialog"
          aria-modal="true"
          style={{ ...styles.wrapper, ...style }}
        >
          <AnimatePresence>
            {/* NOTE: AnimatePresence 을 사용하려면 children 에 key 값을 설정 해야함 */}
            {isOpen
              ? React.Children.map(children, (child: any, i) =>
                React.cloneElement(child, { key: `sheet-child-${i}` }),
              )
              : null}
          </AnimatePresence>
        </div>
      </SheetContext.Provider>
    );

    if (typeof window === 'undefined') return sheet;

    return ReactDOM.createPortal(sheet, mountElement ?? document.body);
  },
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet as SheetCompound;
