import type { SVGProps } from 'react';
import { createElement } from 'react';

import { Attendance } from './Attendance';
import { Certificate } from './Certificate';
import { Close } from './Close';
import { Error } from './Error';
import { Logout } from './Logout';
import { Session } from './Session';
import { Users } from './Users';
import { Weekly } from './Weekly';

type IconName = keyof typeof icons;

const icons = {
  attendance: Attendance,
  certificate: Certificate,
  logout: Logout,
  session: Session,
  users: Users,
  weekly: Weekly,
  error: Error,
  close: Close,
} as const;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

function Icon(props: IconProps) {
  const { name, ...rest } = props;
  return createElement(icons[name], rest);
}

export { Icon };
