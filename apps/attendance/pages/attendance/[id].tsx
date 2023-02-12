import Link from 'next/link';
import { useRouter } from 'next/router';

function Week() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Week {id}</h1>
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
        <Link href='/attendance/id-g'>출석 페이지</Link>
      </div>
      <div>
        <Link href='/attendance/me'>내 출석정보</Link>
      </div>
    </div>
  );
}

export default Week;
