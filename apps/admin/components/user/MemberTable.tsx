import styled from '@emotion/styled';
import { FindMemberResponse } from '@weekly/api/lib/types/attendance';
import { Icon, Popup } from '@weekly/ui';

import { Column, Table } from '../tables/Table';

const COLUMNS: Column[] = [
  {
    label: '이름',
  },
  {
    label: '성별',
  },
  {
    label: '이메일',
  },
  {
    label: '연락처',
  },
  {
    label: '활동 기수',
  },
  {
    label: '직군',
  },
  {
    label: '세부 직군',
  },
  {
    label: '활동 구분',
  },
  {
    label: '',
  },
];
interface Props {
  members?: FindMemberResponse[];
}

function MemberTable(props: Props) {
  const { members } = props;
  return (
    <Table columns={COLUMNS}>
      {members?.map((member) => (
        <Table.Row key={member.id}>
          <Table.Cell item={member.name} />
          <Table.Cell item={member.gender} />
          <Table.Cell item={member.email} />
          <Table.Cell item={member.phoneNumber} />
          <Table.Cell item={member.generations.join(', ')} />
          <Table.Cell item={member.position} />
          <Table.Cell item={member.subPosition} />
          <Table.Cell item={member.status} />
          <Table.Cell
            item={
              <Popup
                width={123}
                options={[
                  {
                    title: '회원 정보 수정',
                    onClick: () => {},
                  },
                  {
                    title: '직군 수정',
                    onClick: () => {},
                  },
                  {
                    title: '활동 구분 수정',
                    onClick: () => {},
                  },
                  {
                    title: '회원 삭제',
                    onClick: () => {},
                  },
                ]}
                direction={'bottom'}
              >
                <ThreeDotMenu>
                  <Icon name='threeDot' />
                </ThreeDotMenu>
              </Popup>
            }
          />
        </Table.Row>
      ))}
    </Table>
  );
}

const ThreeDotMenu = styled.button`
  cursor: pointer;
  z-index: 10;
`;

export { MemberTable };
