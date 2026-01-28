import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createUserSchema = z.object({
  email: z.email(),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
