import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '@core/http/http-service/http-service';

import { User, IUser } from '@shared/models/user';
import { USERS_URL } from '@shared/routes/api.routes';


@Injectable()
export class UserService {

  constructor(private _http: HttpService) {
  }

  public getTopUsers(): Observable<User[]> | null {
    return this._http.get<IUser[]>(USERS_URL)
      .pipe(map(response => {
        return response.sort((a, b) => b.score - a.score).slice(0, 10).map(element =>
          User.from(element));
      }));
  }
}
