import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

/**
 * next/router를 이용해 Redirect를 시키는 이펙트
 * predicate 함수가 없거나 predicate 함수를 실행한 결과가 true일 경우 replace
 *
 * @param url - Redirect 시킬 URL
 * @param predicate - 조건부 Redirect 해야할 경우 사용하는 함수
 */
function useRedirectEffect(url: string, predicate?: () => boolean) {
  const router = useRouter();
  useLayoutEffect(() => {
    if (!predicate || predicate?.()) {
      router.replace(url);
    }
  }, []);
}

export { useRedirectEffect };
