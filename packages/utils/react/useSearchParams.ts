import { useRouter } from 'next/router';

function useSearchParams() {
  const { pathname, replace, push, query } = useRouter();

  const get = (key?: string) => {
    return key ? query[key] : query;
  };

  /**
   * @param args  {key, value} 형태의 배열을 인자로 넘겨 한번에 여러 파라미터 세팅
   */
  const set = (
    args: { key: string; value: string }[],
    option?: { replace: boolean },
  ) => {
    const base = `${pathname}?`;
    const params = args
      .map((arg) => `${arg.key}=${encodeURIComponent(arg.value)}`)
      .join('&');
    option?.replace ? replace(`${base}${params}`) : push(`${base}${params}`);
  };

  const reset = () => {
    replace(`${pathname}`);
  };

  return { get, set, reset };
}

export { useSearchParams };
