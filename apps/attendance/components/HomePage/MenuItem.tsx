import { Icon, styled } from '@weekly/ui';
import _Link from 'next/link';

interface Props {
  iconName: React.ComponentProps<typeof Icon>['name'];
  label: string;
  href: string;
}

function MenuItem(props: Props) {
  const { iconName, label, href } = props;
  return (
    <Container>
      <Link href={href}>
        <Icon name={iconName} />
        <Label>{label}</Label>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.rem(32)};
  }
`;

const Link = styled(_Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  ${({ theme }) => theme.typo.h3Bold};
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const Label = styled.span`
  margin-left: ${({ theme }) => theme.rem(8)};
`;

export { MenuItem };
