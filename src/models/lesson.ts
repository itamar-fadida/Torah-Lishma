import { z } from 'zod';

export const LessonTypeEnum = z.enum(['audio', 'article']);

export const LessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  duration: z.number().optional(), // in minutes
  format: LessonTypeEnum.optional(), // 'audio' | 'article'
  contentUrl: z.string().url().optional(), // renamed from "download_url"
  seriesId: z.string().optional(), // can be null or undefined if not part of a series
  rabbiId: z.string(),
  tags: z.array(z.string()).optional(),
  publishedAt: z.string().datetime().optional(), // ISO 8601
  updatedAt: z.string().datetime().optional(),
});

// Infer the TS type from the schema
export type Lesson = z.infer<typeof LessonSchema>;
