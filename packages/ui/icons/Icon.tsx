import React from 'react';

import {
  Attendance,
  Certificate,
  Chevron,
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
  chevron: Chevron,
} as const;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

const Icon = ({ name, className, ...rest }: IconProps) => {
  return (
    <Container className={className}>
      {React.createElement(icons[name], rest)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export { Icon };
