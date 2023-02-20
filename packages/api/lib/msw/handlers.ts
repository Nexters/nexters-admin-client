import { handlers as attendance } from '../attendance/handlers';
import { handlers as auth } from '../auth/handlers';
import { handlers as members } from '../members/handlers';
import { handlers as sessions } from '../sessions/handlers';

const handlers = [...auth, ...members, ...sessions, ...attendance] as const;

export { handlers };
