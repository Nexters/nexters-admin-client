import { API_URL as attendance } from './attendance/urls';
import { API_URL as auth } from './auth/urls';
import { API_URL as generation } from './generation/urls';
import { API_URL as members } from './members/urls';
import { API_URL as sessions } from './sessions/urls';

const API_URL = {
  ...attendance,
  ...auth,
  ...members,
  ...sessions,
  ...generation,
};

export { API_URL };
