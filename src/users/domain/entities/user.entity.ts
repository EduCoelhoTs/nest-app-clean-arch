import { Entity } from "@/shared/domain/entities/entity";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

// the entity is the core of app in clean architecture, so we need to build only the
// business logic of the app, not using external libraries
export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  update(value: string) {
    this.name = value;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

}
