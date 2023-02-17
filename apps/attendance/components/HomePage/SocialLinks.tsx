import { Icon, styled } from '@weekly/ui';

function SocialLinks() {
  return (
    <Container>
      <Link href='https://teamnexters.com/' target='_blank'>
        <Icon name='link' />
      </Link>
      <Link href='https://www.facebook.com/Nexterspage/' target='_blank'>
        <Icon name='facebook' />
      </Link>
      <Link href='https://www.instagram.com/team_nexters/' target='_blank'>
        <Icon name='instagram' />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  margin-top: ${({ theme }) => theme.rem(12)};
`;

const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.rem(40)};
  height: ${({ theme }) => theme.rem(40)};
  margin: ${({ theme }) => `0 ${theme.rem(8)}`};
  border-radius: ${({ theme }) => theme.rem(8)};
  background-color: ${({ theme }) => theme.palette.grayScale.g80};
`;

export { SocialLinks };
