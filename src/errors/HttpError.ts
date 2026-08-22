export class HttpError extends Error {
  public name: string = "HttpError";
  public status: number;
  public statusText: string;

  constructor({ status, statusText }: { status: number; statusText: string }) {
    super(`${status} ${statusText}`);

    this.status = status;
    this.statusText = statusText;
  }
}
