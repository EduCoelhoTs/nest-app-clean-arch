export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

// the interface is the core of app in clean architecture, so we need to build only the
// business logic of the app, not using external libraries
export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = this.props.createdAt ?? new Date();
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
