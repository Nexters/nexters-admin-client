import { Icon, styled } from '@weekly/ui';
import type { ComponentProps } from 'react';

import { PAGE_URLS } from '~/constants/urls';

import { MenuItem } from './MenuItem';
import { UserCard } from './UserCard';

const menuItems: ComponentProps<typeof MenuItem>[] = [
  { iconName: 'inbox', label: '내 출석 정보', href: PAGE_URLS.ME },
  {
    iconName: 'password',
    label: '비밀번호 재설정',
    href: PAGE_URLS.PASSWORD,
  },
  { iconName: 'userLogout', label: '로그아웃', href: PAGE_URLS.LOGOUT },
];

type Props = {
  open: boolean;
  onClose: VoidFunction;
  user: ComponentProps<typeof UserCard>;
};

function Sidebar(props: Props) {
  const { open, onClose, user } = props;
  return (
    <Container open={open}>
      <CloseButton onClick={onClose}>
        <Icon name='close' />
      </CloseButton>
      <UserCard {...user} />
      <MenuList>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.href} {...menuItem} />
        ))}
      </MenuList>
    </Container>
  );
}

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: ${({ open }) => (open ? '50%' : '0%')};
  transition: transform 0.4s ease, right 0.4s ease;
  min-width: ${({ theme }) => theme.rem(320)};
  transform: ${({ open }) => (open ? 'translateX(50%)' : 'translateX(100%)')};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: ${({ theme }) => `${theme.rem(40)} ${theme.rem(20)}`};
  background-color: ${({ theme }) => theme.palette.grayScale.g100};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
  margin-bottom: ${({ theme }) => theme.rem(56)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

const MenuList = styled.ul`
  margin-top: ${({ theme }) => theme.rem(40)};
  padding-left: ${({ theme }) => theme.rem(12)};
`;

export { Sidebar };
