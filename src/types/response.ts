export type Response<Entity> = Promise<{
  isError: boolean;
  status: number;
  statusText: string;
  data?: Entity;
}>;
