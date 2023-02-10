async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./lib/server');
    server.listen();
  } else {
    const { worker } = await import('./lib/browser');
    worker.start();
  }
}

initMocks();

export { initMocks };
export * from './lib/attendance/types';
export * from './lib/auth/types';
export * from './lib/members/types';
export * from './lib/sessions/types';
export { API_URL } from './lib/urls';
