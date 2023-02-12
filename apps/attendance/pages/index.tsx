import { useLoginMuttion } from '@weekly/api';
import { Button } from '@weekly/ui';
import Link from 'next/link';

function Home() {
  const { mutateAsync, data, isLoading, isError } = useLoginMuttion();
  const onClickSuccess = () => {
    mutateAsync({ email: 'test@test.com', password: '1111' });
  };
  const onClickFail = () => {
    mutateAsync({ email: 'test@test.com', password: '111' });
  };
  return (
    <div>
      <div>{isLoading ? 'Loading' : isError ? 'Error' : data?.data}</div>
      <Button onClick={onClickSuccess}>성공</Button>
      <Button onClick={onClickFail}>실패</Button>
      <h1>홈</h1>
      <div>
        <Link href='/'>홈</Link>
      </div>
      <div>
        <Link href='/authentication/login'>로그인</Link>
      </div>
      <div>
        <Link href='/authentication/logout'>로그아웃</Link>
      </div>
      <div>
        <Link href='/authentication/password'>비밀번호재설정</Link>
      </div>
      <div>
        <Link href='/attendance'>카메라 켜는 출석 페이지</Link>
      </div>
      <div>
        <Link href='/attendance/id-a'>출석 페이지</Link>
      </div>
      <div>
        <Link href='/attendance/me'>내 출석정보</Link>
      </div>
    </div>
  );
}

export default Home;
