// TODO: 공통 사용 훅, 비즈니스 로직 패키지 분리하기
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * next/router를 이용해 Redirect를 시키는 이펙트
 * predicate 함수가 없거나 predicate 함수를 실행한 결과가 true일 경우 history.replace
 * 내부 페이지의 경우 getStaticProps와 같은 API로 처리가 가능하지만 외부의 경우 사용
 *
 * @param url - Redirect 시킬 URL
 * @param predicate - 조건부 Redirect 해야할 경우 사용하는 함수
 */
function useRedirectEffect(url: string, predicate?: () => boolean) {
  const router = useRouter();
  useEffect(() => {
    if (!predicate || predicate?.()) {
      router.replace(url);
    }
  }, []);
}

export { useRedirectEffect };
