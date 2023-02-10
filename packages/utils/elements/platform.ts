function testPlatform(re: RegExp) {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(
      (window.navigator['userAgentData']?.platform as string) ||
          window.navigator.platform,
    )
    : false;
}

export function isMac() {
  return testPlatform(/^Mac/i);
}

export function isIPhone() {
  return testPlatform(/^iPhone/i);
}

export function isIPad() {
  return (
    testPlatform(/^iPad/i) ||
    // 아이패드 OS 13은 Mac으로 노출 돼서 터치 포인트로 판단
    (isMac() && navigator.maxTouchPoints > 1)
  );
}

export function isIOS() {
  return isIPhone() || isIPad();
}

export function isAndroid() {
  return testPlatform(/^Android/i);
}
