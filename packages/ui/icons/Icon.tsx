import React from 'react';

import {
  Attendance,
  Certificate,
  Logout,
  Search,
  Session,
  Users,
  Weekly,
} from '../assets/svgs';
import { styled } from '../emotion';

type IconName = keyof typeof icons;

const icons = {
  attendance: Attendance,
  certificate: Certificate,
  logout: Logout,
  session: Session,
  users: Users,
  weekly: Weekly,
  search: Search,
} as const;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const Icon = ({ name, ...rest }: IconProps) => {
  return <Container>{React.createElement(icons[name], rest)}</Container>;
};

const Container = styled.div`
  display: flex;
`;

export { Icon };
