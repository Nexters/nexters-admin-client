import { AuthGuard } from '~/components/authentication/AuthGuard';
import { DashboardLayout } from '~/components/dashboard/DashboardLayout';

function Activity() {
  return <div />;
}

export default Activity;

Activity.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
