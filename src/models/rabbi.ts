import { z } from "zod";

export const RabbitStatusEnum = z.enum(["approved", "pending", "no-limit"]);

export const RabbiSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string().optional(),
  topics: z.array(z.string()).optional(),
  imageUrl: z.string().url().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  status: RabbitStatusEnum.optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Rabbi = z.infer<typeof RabbiSchema>;

// const rabbi = RabbiSchema.parse(input); // validation + type-safe