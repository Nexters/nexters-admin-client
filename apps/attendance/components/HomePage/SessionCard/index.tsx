import type { ComponentProps } from 'react';

import { Empty } from './Empty';
import { Session } from './Session';

type EmptyType = { type: 'empty' };
type SessionType = { type: 'session' } & ComponentProps<typeof Session>;
type Props = EmptyType | SessionType;

function SessionCard(props: Props) {
  const { type } = props;
  return type === 'empty' ? (
    <Empty />
  ) : (
    <Session
      sessionTime={props.sessionTime}
      week={props.week}
      title={props.title}
    />
  );
}

export { SessionCard };
