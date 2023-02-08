import { useAdminAttendanceQuery } from '@weekly/api';
import Link from 'next/link';
import { Suspense } from 'react';

function Attendance() {
  const { data } = useAdminAttendanceQuery();
  return (
    <div>
      <Suspense fallback={<h2>Loading</h2>}>
        <div>{data?.title}</div>
        <div>{data?.description}</div>
      </Suspense>
      <h1>Attendance</h1>
      <div>
        <Link href="/attendance">출석관리</Link>
      </div>
      <div>
        <Link href="/activity">활동관리</Link>
      </div>
      <div>
        <Link href="/user">회원관리</Link>
      </div>
      <div>
        <Link href="/authentication/login">로그인</Link>
      </div>
      <div>
        <Link href="/authentication/logout">로그아웃</Link>
      </div>
    </div>
  );
}

export default Attendance;
