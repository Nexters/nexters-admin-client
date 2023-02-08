import { useAdminAttendanceQuery } from '@weekly/api';
import Link from 'next/link';
import { Suspense } from 'react';

function Home() {
  const { data } = useAdminAttendanceQuery();
  return (
    <div>
      <Suspense fallback={<h2>Loading</h2>}>
        <div>{data?.title}</div>
        <div>{data?.description}</div>
      </Suspense>
      <h1>홈</h1>
      <div>
        <Link href="/">홈</Link>
      </div>
      <div>
        <Link href="/authentication/login">로그인</Link>
      </div>
      <div>
        <Link href="/authentication/logout">로그아웃</Link>
      </div>
      <div>
        <Link href="/authentication/password">비밀번호재설정</Link>
      </div>
      <div>
        <Link href="/attendance">카메라 켜는 출석 페이지</Link>
      </div>
      <div>
        <Link href="/attendance/id-a">출석 페이지</Link>
      </div>
      <div>
        <Link href="/attendance/me">내 출석정보</Link>
      </div>
    </div>
  );
}

export default Home;
