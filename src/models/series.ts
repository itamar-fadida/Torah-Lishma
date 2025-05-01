import { z } from "zod";

export const SeriesSchema = z.object({
  id: z.string(), // e.g. "series-001"
  title: z.string(), // e.g. "Shabbat Series"
  rabbiId: z.string(), // owner/creator
  createdAt: z.string(), // ISO timestamp
  updatedAt: z.string(),
});

export type Series = z.infer<typeof SeriesSchema>;
