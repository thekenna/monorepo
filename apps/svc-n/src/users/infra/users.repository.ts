import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { eq, and } from "drizzle-orm";
import { User, UserParameters } from "@/users/domain/user.entity";
import { UserMapper } from "./users.mapper";
import { IUserRepository } from "@/users/domain/interfaces/user.repository.interface";
import { DRIZZLE_СONN_TOKEN } from "@/database/drizzle/database.provider";
import { usersTable } from "./users.schema";
// import { SearchUserQuery } from "../application/use-cases/search-user.use-case";
import { SearchUserSchemaType } from "../dtos/search-user.dto";
import { UserDbSchemaType } from "./users.schema";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@Inject(DRIZZLE_СONN_TOKEN) private db: NodePgDatabase) {}

  async createUser(email: UserParameters["email"]): Promise<User> {
    const rows = await this.db.insert(usersTable).values({ email }).returning();

    return UserMapper.toDomain(rows[0]);
  }

  async getUserById(id: UserParameters["id"]): Promise<User | null> {
    const rows = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id))
      .limit(1);

    if (!rows[0]) return null;

    return UserMapper.toDomain(rows[0]);
  }

  async findMany(query: SearchUserSchemaType): Promise<UserDbSchemaType[]> {
    const conditions = [];

    if (query.email) {
      conditions.push(eq(usersTable["email"], query.email));
    }

    const limit = query.limit || 10

    const offset = (query.page || 0) * limit

    const users = await this.db
      .select()
      .from(usersTable)
      .where(and(...conditions))
      .offset(offset)
      .limit(limit);

    return users;
  }

  //   async findByEmail(email: UserParameters['email']): Promise<User | null> {
  //     const rows = await this.db
  //       .select()
  //       .from(usersTable)
  //       .where(eq(usersTable.email, email))
  //       .limit(1);

  //     if (!rows[0]) return null;

  //     return UserMapper.toDomain(rows[0]);
  //   }
}
