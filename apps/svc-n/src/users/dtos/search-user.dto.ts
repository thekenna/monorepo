import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const searchUserSchema = z.object({
  email: z.email().optional(),
  limit: z.coerce.number().min(1).max(100).optional(),
  page: z.coerce.number().optional()
});

export class SearchUserDto extends createZodDto(searchUserSchema) {}

export type SearchUserSchemaType = z.infer<typeof searchUserSchema>;
