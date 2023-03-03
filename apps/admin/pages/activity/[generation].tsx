import { Switch } from '@mui/material';
import { useActivity } from '@weekly/api';
import { Modal, Search, styled } from '@weekly/ui';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import ActivityDetailModal from '~/components/activity/ActivityDetailModal';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import { DashboardLayout } from '~/components/dashboard/DashboardLayout';
import { Column, Table } from '~/components/tables/Table';

const attendanceColumnData = [
  '이름',
  '직군',
  '세부 직군',
  '최초 기수',
  '점수',
  '히스토리',
  '수료/이수 여부',
  '운영진 여부',
];

const centerAlignColumns = ['점수', '히스토리', '운용진 여부'];
const COLUMNS: Column[] = attendanceColumnData.map((column) => {
  return {
    label: column,
    align: centerAlignColumns.find(
      (centerAligncolumn) => centerAligncolumn === column,
    )
      ? 'center'
      : 'left',
  };
});

function Activity() {
  const router = useRouter();
  const { generation } = router.query;
  const [search, setSearch] = useState('');
  const [attendances, setAttendances] = useState();
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { data: activity } = useActivity(Number(generation));

  const openModal = (id: number) => {
    setModalOpen(true);
    setSelectedMemberId(id);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedMemberId(null);
  };

  const onChangeSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearch(event.target.value),
    400,
  );

  return (
    <Fragment>
      <Search width={335} />
      <ActivityTable>
        <Table columns={COLUMNS} minWidth={800}>
          {activity?.data.map((row, idx) => (
            <Table.Row>
              <Table.Cell item={row.name} />
              <Table.Cell item={row.position} />
              <Table.Cell item={row.subPosition} />
              <Table.Cell item={row.initialGeneration} />
              <Table.Cell item={row.score} align='center' />
              <Table.Cell
                item={
                  <ViewDetail onClick={() => openModal(row.generationMemberId)}>
                    자세히보기
                  </ViewDetail>
                }
                align='center'
              />
              <Table.Cell
                item={
                  <IsCompletable isCompletable={row.isCompletable}>
                    {row.isCompletable ? '가능' : '불가능'}
                  </IsCompletable>
                }
              />
              <Table.Cell
                align='center'
                item={
                  <SwitchContainer>
                    <Switch checked={row.isManager} disableRipple />
                  </SwitchContainer>
                }
              />
            </Table.Row>
          ))}
        </Table>
      </ActivityTable>
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

const ActivityTable = styled.div`
  margin-top: ${({ theme }) => theme.rem(20)};
`;
const ViewDetail = styled.div`
  text-decoration: underline;
  ${({ theme }) => theme.typo.body2Regular}
  &:hover {
    cursor: pointer;
  }
`;

const IsCompletable = styled.div<{ isCompletable: boolean }>`
  color: ${({ theme, isCompletable }) =>
    !isCompletable && theme.palette.main.red100};
`;

const SwitchContainer = styled.div`
  .css-1yjjitx-MuiSwitch-track {
    opacity: 1;
    background-color: ${({ theme }) => theme.palette.grayScale.g30};
  }
  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.palette.grayScale.g50};
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
    color: ${({ theme }) => theme.palette.main.green50};
  }
`;

Activity.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
