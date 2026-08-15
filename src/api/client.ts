export const INTERVIEW_TOKEN = 'interview-test-token';

export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('x-access-token', INTERVIEW_TOKEN);
  return fetch(path, { ...init, headers });
}
