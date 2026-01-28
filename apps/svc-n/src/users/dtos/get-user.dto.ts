import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const getUserSchema = z.object({
  id: z.uuid(),
});

export class GetUserDto extends createZodDto(getUserSchema) {}

export type GetUserSchemaType = z.infer<typeof getUserSchema>;
