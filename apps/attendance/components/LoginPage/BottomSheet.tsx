import { Icon, styled } from '@weekly/ui';
import { useEventListener, useOnClickOutside } from '@weekly/utils';
import { useRef } from 'react';

function BottomSheet() {
  const ref = useRef<HTMLDivElement>(null);
  const close = () => {
    window.location.hash = '';
  };
  useOnClickOutside(ref, close);
  useEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      close();
    }
  });
  return (
    <Container id='help-login'>
      <Contents className='contents' ref={ref}>
        <CloseButton href='#'>
          <Icon name='close' />
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
          email:{' '}
          <UnderlineDescription>teamnexters@gmail.com</UnderlineDescription>
        </Description>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 450ms cubic-bezier(0.32, 1, 0.23, 1) 0ms;
  background: rgba(0, 0, 0, 0.74);
  &:target {
    position: fixed;
    top: 0;
    opacity: 1;

    & > .contents {
      transform: translate(-50%, 0);
      z-index: 9999;
    }
  }
`;

const Contents = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 100%;
  transition: all 450ms cubic-bezier(0.32, 1, 0.23, 1) 100ms;
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
  display: block;
  ${({ theme }) => theme.typo.body2Bold};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Regular};
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.rem(16)};
  }
`;

const UnderlineDescription = styled.span`
  text-decoration: underline;
`;

const CloseButton = styled.a`
  position: absolute;
  color: inherit;
  top: ${({ theme }) => theme.rem(25)};
  right: ${({ theme }) => theme.rem(25)};
  width: ${({ theme }) => theme.rem(14)};
  height: ${({ theme }) => theme.rem(14)};
`;

export { BottomSheet };
