import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const STACKBLITZ_HOST_SUFFIXES = ['.stackblitz.io', '.webcontainer.io', '.webcontainer-api.io'];

function shouldUseNativeMocking(url: URL) {
  return (
    url.searchParams.get('mockTransport') === 'native' ||
    STACKBLITZ_HOST_SUFFIXES.some((suffix) => url.hostname.endsWith(suffix))
  );
}

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  if (shouldUseNativeMocking(new URL(window.location.href))) {
    const { server } = await import('./mocks/native');
    server.listen({ onUnhandledRequest: 'error' });
    return;
  }

  const { worker } = await import('./mocks/browser');
  await worker.start({ onUnhandledRequest: 'error' });
}

await enableMocking();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
