import { usersDbSchema, type UserDbSchemaType} from "./users.schema";
import { User, UserProps } from "../domain/user.entity";

export class UserMapper {
  static toDomain(data: UserDbSchemaType): User {

    const userProps = UserMapper.toProps(data)

    return new User(userProps);
  }

  static toProps(data: UserDbSchemaType): UserProps {
    const dto = usersDbSchema.parse(data);

    return {
      id: dto.id,
      createdAt: dto.createdAt,
      email: dto.email,
    }
  }
}
