export class ServerActionError extends Error {
  public name: string = "ServerActionError";

  constructor(message: string) {
    super(message);
  }
}
