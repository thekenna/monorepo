import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUserByIdQuery } from "./get-user-by-id.query";
import { User } from "@/users/domain/user.entity";
import {
  IUserRepository,
  USER_REPOSITORY_TOKEN,
} from "@/users/domain/interfaces/user.repository.interface";
import { Inject } from "@nestjs/common";

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly repo: IUserRepository
  ) {}

  async execute(query: GetUserByIdQuery): Promise<User | null> {
    return await this.repo.getUserById(query.id)
  }
}
