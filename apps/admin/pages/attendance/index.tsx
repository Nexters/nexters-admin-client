import { queryClient } from '@weekly/api';
import { GenerationResponses } from '@weekly/api/lib/types/admin';
import { useRedirectEffect } from '@weekly/utils';

import { AuthGuard } from '~/components/authentication/AuthGuard';
import { DashboardLayout } from '~/components/dashboard/DashboardLayout';

function AttendanceHome() {
  const generations = queryClient.getQueryData<GenerationResponses>([
    'generation',
  ]);
  const latestGeneration = generations?.data[0].generation;
  useRedirectEffect(`/attendance/${latestGeneration}`);
  return null;
}
export default AttendanceHome;

AttendanceHome.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
