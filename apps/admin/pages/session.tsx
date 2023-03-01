import { styled } from '@weekly/ui';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';

function Session() {
  return null;

  // return (
  //   <Container>
  //     <Button size='small'>세션 추가</Button>
  //     <SessionList>
  //       {isSuccess && (
  //         <Fragment>
  //           {sessions.map((session) => (
  //             <SessionItem session={session} />
  //           ))}
  //         </Fragment>
  //       )}
  //     </SessionList>
  //   </Container>
  // );
}

const Container = styled.div``;

const SessionList = styled.div`
  display: flex;
  gap: 24px;
`;

Session.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Session;
