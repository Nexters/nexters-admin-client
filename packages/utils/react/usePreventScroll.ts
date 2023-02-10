import { chain } from '../common';
import { addEvent, getScrollParent, isIOS, setStyle } from '../elements';
import { useIsomorphicLayoutEffect } from '../react';

let preventScrollCount = 0;
let restore: VoidFunction | void;
/**
 * scroll 상태를 제어 합니다.
 *
 * @param {boolean} isPreventScroll
 * @returns {void}
 * @example
 * ```ts
 * usePreventScroll(true);
 * ```
 */
export function usePreventScroll({
  isDisabled = false,
}: {
  isDisabled?: boolean;
}) {
  useIsomorphicLayoutEffect(() => {
    if (isDisabled) {
      return;
    }

    preventScrollCount++;
    if (preventScrollCount === 1) {
      if (isIOS()) {
        restore = preventScrollMobileSafari();
      } else {
        restore = preventScrollStandard();
      }
    }

    return () => {
      preventScrollCount--;
      if (preventScrollCount === 0) {
        (restore as VoidFunction)();
      }
    };
  }, [isDisabled]);
}

function preventScrollStandard() {
  return chain(
    setStyle(
      document.documentElement,
      'paddingRight',
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    ),
    setStyle(document.documentElement, 'overflow', 'hidden'),
  );
}

function preventScrollMobileSafari() {
  let scrollable: Element;
  let lastY = 0;
  const onTouchStart = (e: Event) => {
    // 사용자가 터치한 엘리먼트 중에 가장 가까운 스크롤 가능한 엘리먼트 찾기
    scrollable = getScrollParent(e.target as Element);
    if (
      scrollable === document.documentElement &&
      scrollable === document.body
    ) {
      return;
    }

    lastY = (e as TouchEvent).changedTouches[0].pageY;
  };

  const onTouchMove = (e: Event) => {
    // 창 스크롤을 방지
    if (
      scrollable === document.documentElement ||
      scrollable === document.body
    ) {
      e.preventDefault();
      return;
    }

    // 바운스 스크롤을 방지 하지만, 모바일 Safari 에서 창을 스크롤 할 수 있음
    const y = (e as TouchEvent).changedTouches[0].pageY;
    const scrollTop = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;

    if ((scrollTop <= 0 && y > lastY) || (scrollTop >= bottom && y < lastY)) {
      e.preventDefault();
    }

    lastY = y;
  };

  const onTouchEnd = (e: Event) => {
    const target = e.target as HTMLElement;

    // 대상 엘리먼트에 초점이 맞지 않는 경우
    if (willOpenKeyboard(target) && target !== document.activeElement) {
      e.preventDefault();

      target.style.transform = 'translateY(-2000px)';
      target.focus();
      requestAnimationFrame(() => {
        target.style.transform = '';
      });
    }
  };

  const onFocus = (e: Event) => {
    const target = e.target as HTMLElement;
    if (willOpenKeyboard(target)) {
      target.style.transform = 'translateY(-2000px)';
      requestAnimationFrame(() => {
        target.style.transform = '';
      });
    }
  };

  const onWindowScroll = () => {
    window.scrollTo(0, 0);
  };

  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;

  const restoreStyles = chain(
    setStyle(
      document.documentElement,
      'paddingRight',
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    ),
    setStyle(document.documentElement, 'overflow', 'hidden'),
    setStyle(document.body, 'marginTop', `-${scrollY}px`),
  );

  window.scrollTo(0, 0);

  const removeEvents = chain(
    addEvent(document, 'touchstart', onTouchStart, {
      passive: false,
      capture: true,
    }),
    addEvent(document, 'touchmove', onTouchMove, {
      passive: false,
      capture: true,
    }),
    addEvent(document, 'touchend', onTouchEnd, {
      passive: false,
      capture: true,
    }),
    addEvent(document, 'focus', onFocus, true),
    addEvent(window, 'scroll', onWindowScroll),
  );

  return () => {
    // 스타일 및 스크롤 위치 복원
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}

function willOpenKeyboard(target: Element) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}
