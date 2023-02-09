import * as auth from './auth';

const handlers = [...auth.handlers] as const;

export { handlers };
