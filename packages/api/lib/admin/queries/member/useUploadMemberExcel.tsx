import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '../../api';
import { memberKeys } from '../../queryKeyFactories/memberKeys';

type Params = Parameters<typeof api.admin.createMembersByAdministrator>[0];

function uploadMemberExcel({
  generation,
  csvFile,
}: {
  generation: number;
  csvFile: File;
}) {
  return api.admin.createMembersByAdministrator(
    {
      generation,
    },
    {
      csvFile,
    },
  );
}

export default function useUploadMemberExcel() {
  const queryClient = useQueryClient();
  return useMutation(uploadMemberExcel, {
    onSuccess() {
      queryClient.invalidateQueries(memberKeys.lists());
    },
    onError(error) {
      console.log('Error: useUploadMemberExcel', error);
    },
  });
}
