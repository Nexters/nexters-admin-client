import Link from 'next/link';

import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';

function Session() {
  return (
    <div>
      <h1>Session</h1>
      <div>
        <Link href='/attendance'>출석관리</Link>
      </div>
      <div>
        <Link href='/activity'>활동관리</Link>
      </div>
      <div>
        <Link href='/user'>회원관리</Link>
      </div>
      <div>
        <Link href='/session'>세션관리</Link>
      </div>
      <div>
        <Link href='/authentication/login'>로그인</Link>
      </div>
      <div>
        <Link href='/authentication/logout'>로그아웃</Link>
      </div>
    </div>
  );
}

Session.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Session;
