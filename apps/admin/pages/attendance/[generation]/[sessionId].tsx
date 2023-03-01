import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { AuthGuard } from '~/components/authentication/AuthGuard';

function AttendanceSession() {
  return <div>asasdf</div>;
}

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
