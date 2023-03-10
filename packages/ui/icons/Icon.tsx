import { createElement } from 'react';

import { Attendance } from './Attendance';
import { Box } from './Box';
import { Camera } from './Camera';
import { Certificate } from './Certificate';
import { CheckCircle } from './CheckCircle';
import { Chevron } from './Chevron';
import { ChevronLeft } from './ChevronLeft';
import { Clock } from './Clock';
import { Close } from './Close';
import { Edit } from './Edit';
import { Error } from './Error';
import { Facebook } from './Facebook';
import { Inbox } from './Inbox';
import { Instagram } from './Instagram';
import { Link } from './Link';
import { Logout } from './Logout';
import { Password } from './Password';
import { Search } from './Search';
import { Session } from './Session';
import { ThreeDot } from './ThreeDot';
import { ThumbsUp } from './ThumbsUp';
import { Trash } from './Trash';
import { User } from './User';
import { UserLogout } from './UserLogout';
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
  inbox: Inbox,
  password: Password,
  userLogout: UserLogout,
  thumbsUp: ThumbsUp,
  checkCircle: CheckCircle,
  edit: Edit,
  chevronLeft: ChevronLeft,
  trash: Trash,
  box: Box,
  threeDot: ThreeDot,
  clock: Clock,
} as const;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

function Icon(props: IconProps) {
  const { name, ...rest } = props;
  return createElement(icons[name], rest);
}

export { Icon };
