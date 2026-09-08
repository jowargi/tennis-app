import z from "zod";

export const brandSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Brand = z.infer<typeof brandSchema>;
