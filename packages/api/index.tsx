async function initMocks() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    if (typeof window === 'undefined') {
      const { server } = await import('./lib/msw/server');
      server.listen();
    } else {
      const { worker } = await import('./lib/msw/browser');
      worker.start();
    }
  }
}

initMocks();

export { initMocks };
export * from './lib';
