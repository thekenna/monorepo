import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
// import { CreateUserUseCase } from "./application/use-cases/create-user.use-case";
// import { GetUserUseCase } from "./application/use-cases/get-user.use-case";
import { GetUserDto } from "./dtos/get-user.dto";
import { User, UserProps } from "./domain/user.entity";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "./application/commands/create-user.command";
import { GetUserByIdQuery } from "./application/queries/get-user-by-id.query";
import { NotFoundError } from "rxjs";
import { SearchUserDto } from "./dtos/search-user.dto";

@Controller("/api/users")
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return await this.commandBus.execute(new CreateUserCommand(dto.email));
  }

  @Get(":id")
  async getUserById(@Param() dto: GetUserDto): Promise<User> {
    const user = await this.queryBus.execute(new GetUserByIdQuery(dto.id));

    if (!user) {
      throw new NotFoundException(`user with id: ${dto.id} not found`);
    }

    return user;
  }

  @Get()
  async getUsersList (@Query() dto: SearchUserDto): Promise<UserProps[]> {
    // dto.
    // return 
  }
}
