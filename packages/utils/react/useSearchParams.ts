import { useRouter } from 'next/router';

function useSearchParams() {
  const { pathname, replace, query } = useRouter();

  const getSearhParams = () => {
    return query;
  };

  /**
   * @param args  {key, value} 형태의 배열을 인자로 넘겨 한번에 여러 파라미터 세팅
   */
  const setSearchParams = (args: { key: string; value: string }[]) => {
    const base = `${pathname}?`;
    const params = args.map((arg) => `${arg.key}=${arg.value}`).join('&');
    replace(`${base}${params}`);
  };

  const resetSearchParmas = () => {
    replace(`${pathname}`);
  };

  return { getSearhParams, setSearchParams, resetSearchParmas };
}

export { useSearchParams };
