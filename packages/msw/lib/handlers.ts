import * as auth from './auth';
import * as members from './members';

const handlers = [...auth.handlers, ...members.handlers] as const;

export { handlers };
