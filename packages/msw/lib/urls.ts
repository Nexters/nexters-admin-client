import * as attendance from './attendance';
import * as auth from './auth';
import * as members from './members';
import * as sessions from './sessions';

const API_URL = {
  ...attendance.API_URL,
  ...auth.API_URL,
  ...members.API_URL,
  ...sessions.API_URL,
};

export { API_URL };
