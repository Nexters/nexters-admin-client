import { Dropdown } from '@weekly/ui';
import Link from 'next/link';
import { useState } from 'react';

import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';

function Attendance() {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <h1>Attendance</h1>
      <div>
        <Link href='/authentication/login'>로그인</Link>
      </div>
      <div>
        <Link href='/authentication/logout'>로그아웃</Link>
      </div>
      <Dropdown
        size='large'
        option={['출석', '지각', '통보 결석']}
        placeholder={'출결 항목을 입력해주세요'}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

Attendance.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Attendance;
