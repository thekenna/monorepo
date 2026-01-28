import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { User } from "@/users/domain/user.entity";
import { Inject } from "@nestjs/common";
import { IUserRepository, USER_REPOSITORY_TOKEN } from "@/users/domain/interfaces/user.repository.interface";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly repo: IUserRepository
    ){}

    async execute(command: CreateUserCommand): Promise<User> {
        return await this.repo.createUser(command.email)
    }
}