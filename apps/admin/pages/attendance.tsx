import Link from 'next/link';

import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';

function Attendance() {
  return (
    <div>
      <h1>Attendance</h1>
      <div>
        <Link href='/authentication/login'>로그인</Link>
      </div>
      <div>
        <Link href='/authentication/logout'>로그아웃</Link>
      </div>
    </div>
  );
}

Attendance.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Attendance;
