import { css, styled } from '@weekly/ui';
import { useRouter } from 'next/router';

import Activity from '~/assets/icons/certificate.svg';
import Attendance from '~/assets/icons/image-user-check.svg';
import Session from '~/assets/icons/line-chart-up.svg';
import User from '~/assets/icons/users.svg';

import { menuList } from '../components/dashboard/DashboardSidebar';

type AdminMenu = (typeof menuList)[number];

type AdminMenuMapType = Record<
  AdminMenu,
  {
    icon: JSX.Element;
    label: string;
    route: string;
  }
>;

const adminMenuMap: AdminMenuMapType = {
  attendance: {
    icon: <Attendance />,
    label: '출석',
    route: '/attendance',
  },
  activity: {
    icon: <Activity />,
    label: '활동',
    route: '/activity',
  },
  user: {
    icon: <User />,
    label: '회원',
    route: '/user',
  },
  session: {
    icon: <Session />,
    label: '세션',
    route: '/session',
  },
};

interface MenuProps extends React.ComponentProps<'button'> {
  variant: AdminMenu;
}

function Menu(props: MenuProps) {
  const { variant } = props;
  const router = useRouter();

  const isSelected = router.pathname.includes(adminMenuMap[variant].route);

  const handleClickMenu = () => {
    router.replace(adminMenuMap[variant].route);
  };

  return (
    <Container isSelected={isSelected} onClick={handleClickMenu}>
      {adminMenuMap[variant].icon}
      {adminMenuMap[variant].label}
    </Container>
  );
}

const Container = styled.button<{ isSelected: boolean }>`
  width: 100px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;

  ${({ theme, isSelected }) =>
    isSelected
      ? css`
          background-color: ${theme.palette.grayScale.g90};

          color: ${theme.palette.grayScale.white};
          ${theme.typo.body1Bold}

          svg {
            stroke: ${theme.palette.grayScale.white};
            stroke-width: 2px;
          }
        `
      : css`
          background-color: ${theme.palette.grayScale.g100};

          color: ${theme.palette.grayScale.g40};
          ${theme.typo.body1Medium}

          svg {
            stroke: ${theme.palette.grayScale.g40};
            stroke-width: 1.5px;
          }
        `}
`;

export { Menu };
