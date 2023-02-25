import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';

function Session() {
  return <div />;
}

Session.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Session;
