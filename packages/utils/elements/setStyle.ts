export function setStyle(element: HTMLElement, style: string, value: string) {
  const castStyle = style as keyof CSSStyleDeclaration;
  const cur = element.style[castStyle];

  element.style[castStyle as number] = value;

  return () => {
    element.style[castStyle as number] = cur as string;
  };
}
