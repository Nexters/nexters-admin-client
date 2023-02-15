import { Icon, styled } from '@weekly/ui';

import { menus } from '~/data';

import { Menu } from './SidebarMenu';

function DashboardSidebar() {
  return (
    <Wrapper>
      <Logo>
        <Icon name='weekly' />
      </Logo>
      <Menus>
        {menus.map((menu) => (
          <Menu variant={menu} key={menu} />
        ))}
      </Menus>
      <Bottom>
        <LogOutButton>
          <Icon name='logout' />
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
  width: ${({ theme }) => theme.rem(132)};
`;

const Logo = styled.div`
  margin: ${({ theme }) => theme.rem(34)} auto;
`;

const Menus = styled.div`
  width: ${({ theme }) => theme.rem(116)};
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.rem(16)};
  border-top: ${({ theme }) => theme.rem(1)} solid
    ${({ theme }) => theme.palette.grayScale.g80};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.rem(8)};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.rem(32)};
  left: ${({ theme }) => theme.rem(35)};
`;

const LogOutButton = styled.button`
  color: ${({ theme }) => theme.palette.grayScale.white};
  ${({ theme }) => theme.typo.captionBold}

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.rem(4)};

  & > span {
    padding-top: ${({ theme }) => theme.rem(1)};
  }
`;

const Version = styled.div`
  color: ${({ theme }) => theme.palette.grayScale.g60};
  ${({ theme }) => theme.typo.captionMedium}

  margin-top: ${({ theme }) => theme.rem(8)};
`;

export { DashboardSidebar };
