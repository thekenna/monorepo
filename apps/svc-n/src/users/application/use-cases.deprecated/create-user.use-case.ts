// import { User, UserParameters } from "@/users/domain/entities/user.entity";
// import { IUserRepository, USER_REPOSITORY_TOKEN } from "@/users/domain/interfaces/user.repository.interface";
// import { UserRepository } from "@/users/infra/users.repository";
// import { Inject, Injectable } from "@nestjs/common";

// export type CreateUserCommand = {
//   email: UserParameters["email"];
// };

// @Injectable()
// export class CreateUserUseCase {
//   constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly repo: IUserRepository) {}

//   async execute(command: CreateUserCommand): Promise<User> {
//     const user = await this.repo.createUser(command.email)

//     return user
//   }
// }
