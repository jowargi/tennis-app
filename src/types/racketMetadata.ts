import { Racket } from "./racket";

export type RacketMetadata = Omit<Racket, "userData">;
