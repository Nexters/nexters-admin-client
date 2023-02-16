import { styled } from '@weekly/ui';
import type { ComponentProps } from 'react';

import { Empty } from './Empty';
import { Session } from './Session';

type EmptyType = { type: 'empty' };
type SessionType = { type: 'session' } & ComponentProps<typeof Session>;
type Props = EmptyType | SessionType;

function SessionCard(props: Props) {
  const { type } = props;
  return (
    <Container>
      {type === 'empty' ? (
        <Empty />
      ) : (
        <Session
          date={props.date}
          week={props.week}
          description={props.description}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(360)};
  border-radius: ${({ theme }) => theme.rem(24)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
`;

export { SessionCard };
