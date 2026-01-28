import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { USER_REPOSITORY_TOKEN } from "./domain/interfaces/user.repository.interface";
import { UserRepository } from "./infra/users.repository";
// import { USER_USE_CASES } from "./application/use-cases";
import { CreateUserHandler } from "./application/commands/create-user.handler";
import { GetUserByIdHandler } from "./application/queries/get-user-by-id.handler";

@Module({
    providers:[
        {
            provide: USER_REPOSITORY_TOKEN,
            useClass: UserRepository
        },
        CreateUserHandler,
        GetUserByIdHandler,
        // ...USER_USE_CASES
    ],
    controllers:[UserController],

})
export class UserModule {}
