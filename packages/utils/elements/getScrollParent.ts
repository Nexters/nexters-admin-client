export function getScrollParent(node: Element): Element {
  while (node && !isScrollable(node)) {
    node = node.parentElement as HTMLElement;
  }

  return node || document.scrollingElement || document.documentElement;
}

function isScrollable(node: Element): boolean {
  const style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(
    style.overflow + style.overflowX + style.overflowY,
  );
}
