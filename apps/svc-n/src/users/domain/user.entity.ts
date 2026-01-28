export type UserProps = {
  id: string;
  email: string;
  createdAt: Date;
};

export class User {
  constructor(private readonly parameters: UserProps) {}
  get id() {
    return this.parameters.id;
  }
  get email() {
    return this.parameters.email;
  }
  get cretedAt() {
    return this.parameters.createdAt;
  }
}
