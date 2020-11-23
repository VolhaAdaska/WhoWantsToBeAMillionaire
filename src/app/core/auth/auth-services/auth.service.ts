import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { HttpService } from '@core/http/http-service/http-service';

import { User, IUser, IForm } from '@shared/models/user';


@Injectable()
export class AuthService {

  private readonly _CURRENTUSER: string;
  private _serverUrl = 'http://localhost:3000';

  constructor(private _http: HttpService) {
    this._CURRENTUSER = 'currentUser';
  }

  public login(email: string, password: string): Observable<User> | null {

   return this._http.get<IUser[]>(this._serverUrl + `/users`)
     .pipe(map(response => {
      const data = response.find(x => x.email === email && x.password === password);
      if (data) {
        const user = User.from(data);
        localStorage.setItem(this._CURRENTUSER, JSON.stringify(user));
        return user;
      }
      return null;
     }));
  }

  public logout(): void {
    localStorage.removeItem(this._CURRENTUSER);
  }

  public register(user: IForm): Promise<void> {
   return this._http.post(this._serverUrl + `/users`, user).pipe(take(1)).toPromise() as unknown as Promise<void>;
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(this._CURRENTUSER) !== null;
  }
}


