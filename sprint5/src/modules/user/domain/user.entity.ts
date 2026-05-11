export class User {
  id?: number;
  name: string;
  email: string;
  password: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}