import { Switch } from '@mui/material';
import { AttendanceActivityResponse } from '@weekly/api/lib/types/admin';
import { styled } from '@weekly/ui';

import { Column, Table } from '../tables/Table';

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

function ActivityTable({
  activity,
  openModal,
}: {
  activity?: AttendanceActivityResponse[];
  openModal: (id: number) => void;
}) {
  return (
    <Container>
      <Table columns={COLUMNS} minWidth={800}>
        {activity?.map((row, idx) => (
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
    </Container>
  );
}

const Container = styled.div`
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

export default ActivityTable;
