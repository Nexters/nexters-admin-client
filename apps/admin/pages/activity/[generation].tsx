import { useActivity } from '@weekly/api';
import { AttendanceActivityResponse } from '@weekly/api/lib/types/admin';
import { Modal, Search } from '@weekly/ui';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import ActivityDetailModal from '~/components/activity/ActivityDetailModal';
import ActivityTable from '~/components/activity/ActivityTable';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import { DashboardLayout } from '~/components/dashboard/DashboardLayout';

function Activity() {
  const router = useRouter();
  const { generation } = router.query;
  const [search, setSearch] = useState('');
  const [activeMembers, setActiveMembers] =
    useState<AttendanceActivityResponse[]>();
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const { data, isSuccess } = useActivity(Number(generation));
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMemberId(null);
  };
  const openModal = (id: number) => {
    setModalOpen(true);
    setSelectedMemberId(id);
  };

  const onChangeSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearch(event.target.value),
    400,
  );

  useEffect(() => {
    search
      ? setActiveMembers(
        data?.data.filter((member) => member.name.includes(search)),
      )
      : setActiveMembers(data?.data);
  }, [search, data]);

  return (
    <Fragment>
      <Search width={335} onChange={onChangeSearch} />
      {isSuccess && (
        <ActivityTable activity={activeMembers} openModal={openModal} />
      )}
      {selectedMemberId && (
        <Modal isOpen={modalOpen} onDismiss={closeModal}>
          <ActivityDetailModal
            closeModal={closeModal}
            memberId={selectedMemberId}
          />
        </Modal>
      )}
    </Fragment>
  );
}

export default Activity;

Activity.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
