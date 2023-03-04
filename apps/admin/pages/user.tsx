import { Box } from '@mui/material';
import { useMembers } from '@weekly/api';
import { Button, Search } from '@weekly/ui';
import React from 'react';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import { MemberRegisterModal } from '~/components/user/MemberRegisterModal';
import { MemberTable } from '~/components/user/MemberTable';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '401px',
  bgcolor: '#fff',
  padding: '16px 20px',
  borderRadius: '8px',
};
function User() {
  const { data: members } = useMembers({});
  const [fileUploadModalOpen, toggleFileUploadModal] = React.useReducer(
    (open) => !open,
    false,
  );

  return (
    <Box>
      <MemberRegisterModal
        open={fileUploadModalOpen}
        toggleModal={toggleFileUploadModal}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Search width={355} />
        <Button size='small' onClick={toggleFileUploadModal}>
          회원 등록
        </Button>
      </Box>
      <Box>
        <MemberTable members={members} />
      </Box>
    </Box>
  );
}

User.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};

export default User;
