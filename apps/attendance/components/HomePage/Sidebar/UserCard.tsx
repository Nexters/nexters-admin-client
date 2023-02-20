import { styled } from '@weekly/ui';

import { useUserState } from '~/atoms/user';

function UserCard() {
  const userState = useUserState();
  return userState ? (
    <Container>
      <NameText>{userState.name}</NameText>
      <DetailContainer>
        <GenerationText>{userState.generation}기</GenerationText>
        <PositionText>{userState.position}</PositionText>
      </DetailContainer>
    </Container>
  ) : null;
}

const Container = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.rem(20)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
  padding: ${({ theme }) => theme.rem(24)} ${({ theme }) => theme.rem(16)};
`;

const NameText = styled.h2`
  ${({ theme }) => theme.typo.h2Bold}
  color: ${({ theme }) => theme.palette.main.green100};
  margin-bottom: ${({ theme }) => theme.rem(8)};
`;

const DetailContainer = styled.h3`
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const GenerationText = styled.span`
  ${({ theme }) => theme.typo.h3Bold}
  margin-right: ${({ theme }) => theme.rem(8)};
`;

const PositionText = styled.span`
  ${({ theme }) => theme.typo.h3Medium}
`;

export { UserCard };
