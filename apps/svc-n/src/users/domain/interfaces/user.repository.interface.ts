// import { SearchUserQuery } from "@/users/application/use-cases/search-user.use-case"
import { User, UserProps } from "@/users/domain/user.entity"

export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN')

export type SearchUserQueryType = Partial<Omit<UserProps, 'id' | 'createdAt'>>

export interface IUserRepository {
    getUserById(id: UserProps['id']): Promise<User | null>
    createUser(email: UserProps['email']): Promise<User>
    findMany(query: SearchUserQueryType): Promise<UserProps[]>
}