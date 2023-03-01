import { DashboardLayout } from '~/components/dashboard/DashboardLayout';

function Activity() {
  return <div />;
}

Activity.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Activity;
