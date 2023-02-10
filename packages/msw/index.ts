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
export * from './lib/types';
export { API_URL } from './lib/urls';
