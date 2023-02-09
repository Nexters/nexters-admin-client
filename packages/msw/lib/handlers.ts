import * as auth from './auth';
import * as members from './members';
import * as sessions from './sessions';

const handlers = [
  ...auth.handlers,
  ...members.handlers,
  ...sessions.handlers,
] as const;

export { handlers };
