import { motion } from 'framer-motion';
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

import { useSheetContext } from '../context';
import styles from '../styles';
import { CommonProps } from './types';

const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';

export interface Props
  extends Omit<
    CommonProps,
    'initial' | 'animate' | 'exit' | 'onAnimationComplete'
  > {
  children: React.ReactNode;
}

const SheetContainer = React.forwardRef<any, Props>(
  ({ children, style = {}, className = '', ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      sheetRef,
      windowHeight,
      detent,
      animationOptions,
    } = useSheetContext();

    const [prevOpen] = React.useState(() => isOpen);

    const handleAnimationComplete = React.useCallback(() => {
      if (isOpen) {
        callbacks.current.onOpened?.();
      } else {
        callbacks.current.onClosed?.();
      }
    }, [isOpen, prevOpen]);

    const initialY = 0;
    const maxSnapHeight = snapPoints ? snapPoints[0] : null;

    const height =
      maxSnapHeight !== null
        ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})`
        : MAX_HEIGHT;
    const halfHeight = `calc(${height} * 0.6)`;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={{
          ...styles.container,
          ...style,
          ...(detent === 'full' && { height }),
          ...(detent === 'half' && { height: halfHeight }),
          ...(detent === 'content' && { maxHeight: height }),
          y,
        }}
        initial={{ y: windowHeight }}
        animate={{ y: initialY, transition: animationOptions }}
        exit={{ y: windowHeight, transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  },
);

SheetContainer.displayName = 'SheetContainer';

export default SheetContainer;
