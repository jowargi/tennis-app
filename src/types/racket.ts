import { z } from "zod";

export const racketSchema = z.object({
  id: z.number(),
  name: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  type: z.string(),
  model: z.string(),
  year: z.number(),
  top10: z.boolean(),
  description: z.string(),
  brandId: z.number(),
  brand: z.object({
    id: z.number(),
    name: z.string(),
  }),
});

export type Racket = z.infer<typeof racketSchema>;
