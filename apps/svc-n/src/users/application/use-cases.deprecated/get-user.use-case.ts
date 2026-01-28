// import { User, UserParameters } from "@/users/domain/entities/user.entity";
// import { IUserRepository, USER_REPOSITORY_TOKEN } from "@/users/domain/interfaces/user.repository.interface";
// import { Inject, Injectable, NotFoundException } from "@nestjs/common";

// type GetUserQuery = {
//     id: UserParameters['id']
// }

// @Injectable()
// export class GetUserUseCase {
//     constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly repo: IUserRepository){}

//     async execute (query: GetUserQuery): Promise<User> {
//         const user = await this.repo.getUserById(query.id)

//         if (!user) throw new NotFoundException()

//         return user
//     }
// }