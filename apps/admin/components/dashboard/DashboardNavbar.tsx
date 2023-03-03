import { GenerationResponses } from '@weekly/api/lib/types/admin';
import { Dropdown, styled } from '@weekly/ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { MenuKey, menus } from '~/data';

type DashboardNavbarProps = { generations: GenerationResponses };
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

function DashboardNavbar(props: DashboardNavbarProps) {
  const { generations } = props;
  const generatationsValue = generations.data.map((gen) => gen.generation);

  const { pathname, replace } = useRouter();
  const matchedPath = menus.find((v) => pathname.includes(v));
  const splitedPathname = pathname.split('/');
  const [selectedGeneration, setSelectedGeneration] = useState<number>(
    generatationsValue[0],
  );
  const attendancePageGuard =
    matchedPath === 'attendance'
      ? splitedPathname[splitedPathname.length - 1] === '[generation]'
      : true;

  useEffect(() => {
    if (
      matchedPath &&
      navBarMap[matchedPath].selectGeneration &&
      attendancePageGuard
    ) {
      replace(`${navBarMap[matchedPath].route}/${selectedGeneration}`);
    }
  }, [selectedGeneration, pathname]);

  return (
    <Container>
      {matchedPath && navBarMap[matchedPath] && (
        <NavBarContent>
          <Title>{navBarMap[matchedPath].label}</Title>
          {navBarMap[matchedPath].selectGeneration && attendancePageGuard && (
            <Dropdown
              size='small'
              width={96}
              value={`${selectedGeneration}`}
              setValue={setSelectedGeneration}
              options={generatationsValue.map((gen) => `${gen}`)}
              postfix={'기'}
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
  z-index: 0;
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
