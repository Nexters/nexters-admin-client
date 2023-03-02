
import { DashboardLayout } from '~/components//dashboard/DashboardLayout';

function SessionHome() {
  return <div />;
}

SessionHome.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default SessionHome;
