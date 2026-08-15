import { HttpError } from './errors';

export const INTERVIEW_TOKEN = 'interview-test-token';

export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('x-access-token', INTERVIEW_TOKEN);
  return fetch(path, { ...init, headers });
}

export async function checkedResponse(path: string, init: RequestInit = {}): Promise<Response> {
  const response = await apiFetch(path, init);
  if (!response.ok)
    throw new HttpError(response.status, `Request failed with status ${response.status}`);
  return response;
}

export async function readJson(response: Response): Promise<unknown> {
  if (response.status === 204) return null;
  return response.json() as Promise<unknown>;
}
