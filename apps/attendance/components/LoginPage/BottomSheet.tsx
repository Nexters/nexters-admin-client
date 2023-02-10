import { styled } from '@weekly/ui';

interface BottomSheetProps {
  open: boolean;
  onRequestClose: VoidFunction;
}

type Props = Partial<BottomSheetProps>;

function BottomSheet(props: Props) {
  const { open = false, onRequestClose } = props;
  return open ? (
    <Container>
      <Dimmed />
      <Contents>
        <CloseButton onClick={onRequestClose}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="currentColor"
            />
          </svg>
        </CloseButton>
        <Title>로그인, 이렇게 가능해요!</Title>
        <SubTitle>[이메일]</SubTitle>
        <Description>
          신입 기수의 경우 신입 모집시 입력한 이메일, 이전 기수의 경우 이번 기수
          신청시 입력한 이메일을 작성해 주세요.
        </Description>
        <SubTitle>[비밀번호]</SubTitle>
        <Description>
          초기 비밀번호는 본인의 연락처 뒷번호 4자리에요. 비밀번호는 처음 로그인
          시 변경할 수 있어요.
        </Description>
        <SubTitle>[이메일/비밀번호를 잊었을 때]</SubTitle>
        <Description>
          이메일 혹은 비밀번호를 잊었을 때는 운영진에게 문의해 주세요.
          <br />
          email: <span>teamnexters@gmail.com</span>
        </Description>
      </Contents>
    </Container>
  ) : null;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Dimmed = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.grayScale.black};
  opacity: 0.74;
`;

const Contents = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  background: ${({ theme }) => theme.palette.grayScale.g90};
  border-radius: ${({ theme }) => `${theme.rem(16)} ${theme.rem(16)} 0 0`};
  padding: ${({ theme }) =>
    `${theme.rem(64)} ${theme.rem(16)} ${theme.rem(60)} ${theme.rem(16)}`};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typo.h2Bold};
  margin-bottom: ${({ theme }) => theme.rem(24)};
`;

const SubTitle = styled.span`
  ${({ theme }) => theme.typo.body2Bold};
  display: block;
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Regular};
  & > span {
    text-decoration: underline;
  }
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.rem(16)};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  color: inherit;
  top: ${({ theme }) => theme.rem(25)};
  right: ${({ theme }) => theme.rem(25)};
  width: ${({ theme }) => theme.rem(14)};
  height: ${({ theme }) => theme.rem(14)};
`;

export { BottomSheet };
