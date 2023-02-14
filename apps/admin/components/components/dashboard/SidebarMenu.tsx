import { css, styled } from '@weekly/ui';
import { useRouter } from 'next/router';

import Icon from '~/components/icons/Icon';
import { MenuKey } from '~/data';

type AdminMenuMapType = Record<
  MenuKey,
  {
    icon: JSX.Element;
    label: string;
    route: string;
  }
>;

const adminMenuMap: AdminMenuMapType = {
  attendance: {
    icon: <Icon name='attendance' />,
    label: '출석',
    route: '/attendance',
  },
  activity: {
    icon: <Icon name='certificate' />,
    label: '활동',
    route: '/activity',
  },
  user: {
    icon: <Icon name='users' />,
    label: '회원',
    route: '/user',
  },
  session: {
    icon: <Icon name='session' />,
    label: '세션',
    route: '/session',
  },
};

interface MenuProps extends React.ComponentProps<'button'> {
  variant: MenuKey;
}

function Menu(props: MenuProps) {
  const { variant } = props;
  const router = useRouter();

  const isSelected = router.pathname.includes(adminMenuMap[variant].route);

  const handleClickMenu = () => {
    router.push(adminMenuMap[variant].route);
  };

  return (
    <Container isSelected={isSelected} onClick={handleClickMenu}>
      {adminMenuMap[variant].icon}
      {adminMenuMap[variant].label}
    </Container>
  );
}

const Container = styled.button<{ isSelected: boolean }>`
  width: ${({ theme }) => theme.rem(100)};
  padding: ${({ theme }) => `${theme.rem(8)} ${theme.rem(16)}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.rem(8)};
  border-radius: ${({ theme }) => theme.rem(8)};

  ${({ theme, isSelected }) =>
    isSelected
      ? css`
          background-color: ${theme.palette.grayScale.g90};

          color: ${theme.palette.grayScale.white};
          ${theme.typo.body1Bold}

          svg {
            stroke-width: ${theme.rem(2)};
          }
        `
      : css`
          background-color: ${theme.palette.grayScale.g100};

          color: ${theme.palette.grayScale.g40};
          ${theme.typo.body1Medium}

          svg {
            stroke-width: ${theme.rem(1.5)};
          }
        `}
`;

export { Menu };
