import { Dropdown, styled } from '@weekly/ui';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { MenuKey, menus } from '~/data';

interface DashboardNavbarProps {}
type Props = Partial<DashboardNavbarProps>;

type AdminMenuMapType = Record<
  MenuKey,
  {
    label: string;
    route: string;
    selectGeneration: boolean;
  }
>;

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

function DashboardNavbar(props: Props) {
  const { pathname, push } = useRouter();
  const matchedPath = menus.find((v) => pathname.includes(v));
  const [gen, setGen] = useState<string>('');

  //TODO : api fetching
  const generation = ['22기', '21기'];

  useEffect(() => {
    gen !== '' && push(`/${pathname}?generation=${gen.split('기')[0]}`);
  }, [gen]);

  return (
    <Container>
      {matchedPath && (
        <NavBarContent>
          <Title>{navBarMap[matchedPath].label}</Title>
          {navBarMap[matchedPath].selectGeneration && (
            <Dropdown
              size='small'
              width={89}
              value={generation[0]}
              setValue={setGen}
              option={generation}
            />
          )}
        </NavBarContent>
      )}
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  left: 132px;
  top: 0;
  display: flex;

  min-height: 102px;
  width: calc(100% - 132px);
  padding-inline: 40px;
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
