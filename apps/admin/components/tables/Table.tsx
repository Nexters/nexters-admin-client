import {
  Box,
  Card,
  Checkbox,
  styled,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

import { Scrollbar } from './Scrollbar';

type Align = 'center' | 'left' | 'right' | 'inherit' | 'justify';
export interface Column {
  label: string;
  align?: Align;
}

interface Props {
  columns: Column[];
  pagination?: {
    page: number;
    rowsPerPage: number;
    count: number;
  };
  minWidth?: number;
}

/**
 *
 * Table 컴포넌트는 MUI Table을 이용하여 표를 그리는 컴포넌트입니다.
 * @typedef {Object} Column - 테이블 컬럼에 대한 정보를 담은 객체
 * @property {string} label - 컬럼 이름
 * @property {'center' | 'left' | 'right' | 'inherit' | 'justify'} [align] - 컬럼 정렬 방식
 * @typedef {Object} Props - Table 컴포넌트의 props
 * @property {Column[]} columns - 테이블 컬럼 정보
 * @property {Pagination} pagination - 페이징 처리에 대한 정보
 * @property {React.ReactNode} children - 테이블 바디에 들어갈 내용
 * @returns {React.ReactElement} Table 컴포넌트
 * @example
 * ```tsx
 * const COLUMNS: Column[] = [{label: '이름'}, {label: '직군'}, {label: '세부 직군'}, {label: '최초 기수', align: 'right'}]
 * return (
 *  <Table
 *   columns={COLUMNS}
 *   pagination={{
 *    page: 0,
 *    rowsPerPage: 5,
 *    count: 30
 *   }}
 * >
 *   <Table.Row>
 *     <Table.Cell item='김철수' />
 *     <Table.Cell item='프론트엔드 개발자' />
 *     <Table.Cell item='1기' />
 *   </Table.Row>
 *  </Table>
 * )
 * ```
 */

function Table({
  columns,
  pagination,
  children,
  minWidth,
}: React.PropsWithChildren<Props>) {
  return (
    <Box
      sx={{
        minHeight: '100%',
        //p: 3,
      }}
    >
      <Card sx={{ boxShadow: 'none' }}>
        <Scrollbar>
          <MuiTable
            sx={{
              minWidth: minWidth,
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map(({ label, align }, index) => (
                  <TableCell align={align} key={`${label}${index}`}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <Body>{children}</Body>
          </MuiTable>
        </Scrollbar>
        {pagination && (
          <TablePagination
            component='div'
            labelRowsPerPage='페이지 당 행 개수:'
            count={pagination.count}
            onPageChange={() => {
              console.log('onPageChange');
            }}
            onRowsPerPageChange={() => {
              console.log('onRowsPerPageChange');
            }}
            page={pagination.page}
            rowsPerPage={pagination.rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        )}
      </Card>
    </Box>
  );
}

Table.Row = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: VoidFunction;
}) => {
  return <TableRow onClick={onClick}>{children}</TableRow>;
};

Table.Cell = ({
  item,
  align = 'left',
  width,
}: {
  item: React.ReactNode;
  align?: Align;
  width?: number;
}) => {
  return (
    <TableCell
      align={align}
      sx={{
        maxWidth: 150,
        width: width,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        border: 'none',
        overflow: 'visible',
      }}
    >
      {item}
    </TableCell>
  );
};

Table.CheckboxCell = ({
  checked,
  onCheckboxChange,
}: {
  checked: boolean;
  onCheckboxChange: (value: boolean) => void;
}) => {
  return (
    <TableCell sx={{ textAlign: 'center', border: 'none' }}>
      <Checkbox
        checked={checked}
        onChange={({ target }) => onCheckboxChange(target.checked)}
      />
    </TableCell>
  );
};

Table.displayName = 'Table';
(Table.Row as any).displayName = 'TableRow';
(Table.Cell as any).displayName = 'TableCell';
(Table.CheckboxCell as any).displayName = 'TableCheckboxCell';

export { Table };

const Body = styled(TableBody)`
  /* 1, 3, 5... */
  tr:nth-of-type(odd) {
    background-color: #fafafc;
  }
`;
