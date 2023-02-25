import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';

function AttendanceSession() {
  return <div />;
}

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
