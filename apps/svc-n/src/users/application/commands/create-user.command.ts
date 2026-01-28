import { User } from "@/users/domain/user.entity";
import { Command } from "@nestjs/cqrs";

export class CreateUserCommand extends Command<User> {
  constructor(public readonly email: string) {
    super();
  }
}
