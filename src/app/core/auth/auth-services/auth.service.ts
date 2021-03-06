import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { HttpService } from '@core/http/http-service/http-service';

import { User, IUser, IForm } from '@shared/models/user';
import { USERS_URL } from '@shared/routes/api.routes';


@Injectable()
export class AuthService {

  private readonly _CURRENTUSER: string = 'currentUser';

  constructor(private _http: HttpService) {  }

  public login(email: string, password: string): Observable<User> | null {

   return this._http.get<IUser[]>(USERS_URL)
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
   return this._http.post(USERS_URL, user).pipe(take(1)).toPromise() as unknown as Promise<void>;
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(this._CURRENTUSER) !== null;
  }
}
