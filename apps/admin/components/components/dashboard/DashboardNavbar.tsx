import { Dropdown, styled } from '@weekly/ui';
import { useSearchParams } from '@weekly/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { MenuKey, menus } from '~/data';

interface DashboardNavbarProps {}
type Props = Partial<DashboardNavbarProps>;

type AdminMenuItem = {
  label: string;
  route: string;
  selectGeneration: boolean;
};
type AdminMenuMapType = Record<MenuKey, AdminMenuItem>;

const navBarMap: AdminMenuMapType = {
  attendance: {
    label: '출석 관리',
    route: '/attendance',
    selectGeneration: true,
  },
  activity: {
    label: '활동 관리',
    route: '/activity',
    selectGeneration: true,
  },
  user: {
    label: '회원 관리',
    route: '/user',
    selectGeneration: false,
  },
  session: {
    label: '세션 관리',
    route: '/session',
    selectGeneration: false,
  },
};

//TODO : api fetching
const generation = ['22기', '21기'];

function DashboardNavbar(props: Props) {
  const { pathname } = useRouter();
  const searchParams = useSearchParams();
  const matchedPath = menus.find((v) => pathname.includes(v));
  const [gen, setGen] = useState<string>(generation[0]);

  useEffect(() => {
    matchedPath &&
      navBarMap[matchedPath].selectGeneration &&
      searchParams.set([{ key: 'generation', value: gen.split('기')[0] }], {
        replace: true,
      });
  }, [gen]);

  return (
    <Container>
      {matchedPath && navBarMap[matchedPath] && (
        <NavBarContent>
          <Title>{navBarMap[matchedPath].label}</Title>
          {navBarMap[matchedPath].selectGeneration && (
            <Dropdown
              size='small'
              width={96}
              value={gen}
              setValue={setGen}
              options={generation}
            />
          )}
        </NavBarContent>
      )}
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  left: ${({ theme }) => theme.rem(132)};
  top: 0;
  display: flex;

  min-height: ${({ theme }) => theme.rem(102)};
  width: calc(100% - 132px);
  padding-inline: ${({ theme }) => theme.rem(40)};
  box-sizing: border-box;
`;

const NavBarContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.rem(16)};
  padding-top: ${({ theme }) => theme.rem(48)};
`;

const Title = styled.h2`
  height: 38px;
  ${({ theme }) => theme.typo.h2Bold};
`;

export { DashboardNavbar };
