export class User {

  public static from(value: IUser): User {
    return new User(value.firstName,
      value.lastName,
      value.email,
      value.password,
      value.score);
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public get score(): number {
    return this._score;
  }

  constructor(
    private _firstName: string,
    private _lastName: string,
    private _email: string,
    private _password: string,
    private _score: number,
  ) {
  }
}

export interface IUser extends IForm {
  score: number;
}

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

