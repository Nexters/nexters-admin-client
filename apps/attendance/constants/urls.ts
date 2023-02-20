const PAGE_URLS = {
  MAIN: '/',
  LOGIN: '/authentication/login',
  LOGOUT: '/authentication/logout',
  PASSWORD: '/authentication/password',
  ME: '/attendance/me',
  ATTENDANCE: '/attendance',
} as const;

const SNS_URLS = {
  NEXTERS: 'https://teamnexters.com/',
  FACEBOOK: 'https://www.facebook.com/Nexterspage/',
  INSTAGRAM: 'https://www.instagram.com/team_nexters/',
} as const;

export { PAGE_URLS, SNS_URLS };
