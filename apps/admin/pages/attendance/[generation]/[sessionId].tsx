import { useAttendanceQr, useAttendanceSession } from '@weekly/api';
import { AttendanceSessionResponse } from '@weekly/api/lib/types/admin';
import { Button, Search, styled } from '@weekly/ui';
import { formatYYMMDD } from '@weekly/utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import AttendanceTable from '~/components/attendance/AttendanceTable';
import { AuthGuard } from '~/components/authentication/AuthGuard';

function AttendanceSession() {
  const router = useRouter();
  const { sessionId } = router.query;
  const [search, setSearch] = useState('');
  const { data, isSuccess } = useAttendanceSession(Number(sessionId));
  const [attendances, setAttendances] = useState<AttendanceSessionResponse[]>();

  const onChangeSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearch(event.target.value),
    400,
  );
  const { mutate: attendedMutate } = useAttendanceQr({
    sessionId: Number(sessionId),
    qrCodeType: 'ATTENDED',
  });
  const { mutate: tardyMutate } = useAttendanceQr({
    sessionId: Number(sessionId),
    qrCodeType: 'TARDY',
  });

  useEffect(() => {
    search
      ? setAttendances(
        data?.data.filter((member) => member.name.includes(search)),
      )
      : setAttendances(data?.data);
  }, [search, data]);

  return (
    <Container>
      <AttendanceSessionTitle>
        <p>{data?.week}주차 세션</p>
        {isSuccess && <p>{formatYYMMDD(data?.sessionDate)}</p>}
      </AttendanceSessionTitle>

      <AttendanceSessionHeader>
        <Search width={335} onChange={onChangeSearch} />
        <AttendanceSessionRemote>
          <Indicator>
            <p>출석</p>
            <p>{data?.attended}명</p>
            <p>지각</p>
            <p>{data?.tardy}명</p>
            <p>결석</p>
            <p>{data?.absence}명</p>
          </Indicator>
          <Button
            size='small'
            varient='secondary'
            onClick={() => tardyMutate()}
          >
            지각 시작
          </Button>
          <Button size='small' onClick={() => attendedMutate()}>
            출석 시작
          </Button>
        </AttendanceSessionRemote>
      </AttendanceSessionHeader>
      <AttendanceTable attendances={attendances} />
    </Container>
  );
}

const Container = styled.div``;
const AttendanceSessionTitle = styled.div`
  display: flex;
  position: fixed;
  top: 54px;
  left: 277px;
  p:first-of-type {
    ${({ theme }) => theme.typo.body1Bold}
  }
  p:last-of-type {
    margin-left: 8px;
    ${({ theme }) => theme.typo.body1Regular}
  }
  z-index: 10;
`;
const AttendanceSessionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  display: flex;

  justify-content: space-between;
`;
const AttendanceSessionRemote = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  margin-left: 12px;

  button:last-of-type {
    margin-left: ${({ theme }) => theme.rem(12)};
  }
`;
const Indicator = styled.div`
  display: flex;
  flex-shrink: 0;
  p:nth-of-type(2n-1) {
    ${({ theme }) => theme.typo.body2Regular}
    margin-right:${({ theme }) => theme.rem(8)}
  }
  p:nth-of-type(2n) {
    ${({ theme }) => theme.typo.body2Bold}
    position: relative;
    margin-right: ${({ theme }) => theme.rem(24)};
  }
  //최대한 flexgap 안쓰려고 노력,,,,
  p:nth-of-type(2n):not(:last-of-type):after {
    content: '';
    position: absolute;
    display: inline-block;
    margin-left: 12px;
    top: 2px;
    width: 1px;
    height: 17px;
    background-color: ${({ theme }) => theme.palette.grayScale.g30};
  }
`;

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
