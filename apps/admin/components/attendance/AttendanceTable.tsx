import { AttendanceSessionResponse } from '@weekly/api/lib/types/admin';
import { styled } from '@weekly/ui';
import { Fragment } from 'react';

import { Column, Table } from '../tables/Table';
import AttendancePopup from './AttendancePopup';
import AttendanceStatus from './AttendanceStatus';

const attendanceColumnData = [
  '이름',
  '직군',
  '세부 직군',
  '최초 기수',
  '변동',
  '점수',
  '출결',
  '기타 점수',
  '비고',
  ' ',
];

const centerAlignColumns = ['변동', '점수', '출결', '기타 점수'];
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

interface AttendanceTableProps {
  attendances?: AttendanceSessionResponse[];
}

function AttendanceTable({ attendances }: AttendanceTableProps) {
  return (
    <Fragment>
      <Table
        columns={COLUMNS}
        /* pagination={{
        page: 0,
        rowsPerPage: 5,
        count: 30,
      }} */
        minWidth={800}
      >
        {attendances?.map((row, idx) => (
          <Table.Row>
            <Table.Cell item={row.name} />
            <Table.Cell item={row.position} />
            <Table.Cell item={row.subPosition} />
            <Table.Cell item={row.initialGeneration} />
            <Table.Cell
              align='center'
              item={
                row.scoreChanged === 0 ? (
                  '-'
                ) : (
                  <ScoreChanged plus={row.scoreChanged > 0}>
                    {row.scoreChanged}
                  </ScoreChanged>
                )
              }
            />
            <Table.Cell item={row.score} align='center' />
            <Table.Cell
              align='center'
              item={
                row.attendanceStatus === '대기' ? (
                  '-'
                ) : (
                  <AttendanceStatus status={row.attendanceStatus} />
                )
              }
            />
            <Table.Cell
              align='center'
              item={<ExtraScoreNote>{row.extraScoreNote}</ExtraScoreNote>}
            />
            <Table.Cell item={row.note} />
            <Table.Cell
              align='right'
              item={
                <AttendancePopup
                  attendanceMember={row}
                  isLast={idx > attendances.length - 3}
                />
              }
            />
          </Table.Row>
        ))}
      </Table>
    </Fragment>
  );
}

const ScoreChanged = styled.div<{ plus: boolean }>`
  color: ${({ theme, plus }) =>
    plus ? `${theme.palette.main.blue100}` : `${theme.palette.main.red100}`};
`;
const ExtraScoreNote = styled.div`
  color: ${({ theme }) => theme.palette.main.blue100};
`;

export default AttendanceTable;
