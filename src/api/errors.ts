export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export function toError(error: unknown): Error {
  return error instanceof Error ? error : new Error('Unexpected error');
}
