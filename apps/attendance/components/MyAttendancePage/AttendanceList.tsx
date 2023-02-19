import { styled } from '@weekly/ui';
import type { ComponentProps } from 'react';

import { AttendacneListItem } from './AttendanceListItems';

type Props = {
  attendances: ComponentProps<typeof AttendacneListItem>[];
};

function AttendanceList(props: Props) {
  const { attendances } = props;
  return (
    <Container>
      {attendances.map((attendance) => (
        <AttendacneListItem key={attendance.title} {...attendance} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  width: 100%;
`;

export { AttendanceList };
