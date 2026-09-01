import { z } from "zod";

export const userSchema = z.object({ login: z.string(), isAdmin: z.boolean() });

export type User = z.infer<typeof userSchema>;
