import { Fragment } from 'react';

type Props = {
  date: Date;
  week: number;
  description: string;
};

function Session(props: Props) {
  return <Container />;
}

const Container = Fragment;

export { Session };
