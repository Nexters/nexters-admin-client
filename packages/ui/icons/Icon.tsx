import type { SVGProps } from 'react';
import { createElement } from 'react';

import { Attendance } from './Attendance';
import { Camera } from './Camera';
import { Certificate } from './Certificate';
import { Chevron } from './Chevron';
import { Close } from './Close';
import { Error } from './Error';
import { Facebook } from './Facebook';
import { Instagram } from './Instagram';
import { Link } from './Link';
import { Logout } from './Logout';
import { Search } from './Search';
import { Session } from './Session';
import { User } from './User';
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
  user: User,
  link: Link,
  facebook: Facebook,
  instagram: Instagram,
  camera: Camera,
  search: Search,
  chevron: Chevron,
} as const;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

function Icon(props: IconProps) {
  const { name, ...rest } = props;
  return createElement(icons[name], rest);
}

export { Icon };
