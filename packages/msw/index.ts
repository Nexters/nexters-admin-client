async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./lib/server');
    server.listen();
  } else {
    const { worker } = await import('./lib/browser');
    worker.start();
  }
}

export { initMocks };
