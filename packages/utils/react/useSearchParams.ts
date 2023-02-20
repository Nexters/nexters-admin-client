import { useRouter } from 'next/router';

function useSearchParams() {
  const { pathname, replace, push, query } = useRouter();

  const reset = () => replace(pathname);
  const get = (key?: string) => (key ? query[key] : query);

  /**
   * @param args  {key, value} 형태의 배열을 인자로 넘겨 한번에 여러 파라미터 세팅
   */
  const set = (
    args: { key: string; value: string }[],
    option: { replace: boolean } = { replace: false },
  ) => {
    const base = `${pathname}?`;
    const params = args
      .map((arg) => `${arg.key}=${encodeURIComponent(arg.value)}`)
      .join('&');
    const url = base + params;
    option.replace ? replace(url) : push(url);
  };

  return { get, set, reset };
}

export { useSearchParams };
