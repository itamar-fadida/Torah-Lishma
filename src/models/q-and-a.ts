import { z } from "zod";

export const QASubjectSchema = z.enum(["halacha", "emuna", "hashkafa"]);

export const QASchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  rabbiId: z.string(),
  title: z.string().optional(),
  subject: QASubjectSchema.optional(),
  createdAt: z.string().optional(), // ISO 8601
});

export type QA = z.infer<typeof QASchema>;
export type QA_Subject = z.infer<typeof QASubjectSchema>;
