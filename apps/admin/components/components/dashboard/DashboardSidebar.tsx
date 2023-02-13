import { styled } from '@weekly/ui';

import Logout from '~/assets/icons/logout.svg';
import Weekly from '~/assets/icons/weekly.svg';
import { Menu } from '~/components/Layout/Menu';

interface DashboardSidebarProps {}

type Props = Partial<DashboardSidebarProps>;

export const menuList = ['attendance', 'activity', 'user', 'session'] as const;

function DashboardSidebar(props: Props) {
  const {} = props;
  return (
    <Wrapper>
      <Logo />
      <Menus>
        {menuList.map((menu) => (
          <Menu variant={menu} />
        ))}
      </Menus>
      <Bottom>
        <LogOutButton>
          <Logout />
          <span>로그아웃</span>
        </LogOutButton>
        <Version>v.1.0.0</Version>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 999; // FIXME: z-index should be managed by theme
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  outline: 0;
  left: 0;
  background-color: ${({ theme: { palette } }) => palette.grayScale.g100};
  width: 132px;
`;

const Logo = styled(Weekly)`
  margin: 34px auto;
`;

const Menus = styled.div`
  width: 116px;
  margin: 0 auto;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.grayScale.g80};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 32px;
  left: 35px;
`;
const LogOutButton = styled.button`
  color: ${({ theme }) => theme.palette.grayScale.white};
  ${({ theme }) => theme.typo.captionBold}

  display: flex;
  align-items: center;
  gap: 4px;

  & > span {
    padding-top: 1px;
  }
`;
const Version = styled.div`
  color: ${({ theme }) => theme.palette.grayScale.g60};
  ${({ theme }) => theme.typo.captionMedium}

  margin-top: 8px;
`;

export { DashboardSidebar };
