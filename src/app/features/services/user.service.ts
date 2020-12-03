import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '@core/http/http-service/http-service';

import { User, IUser } from '@shared/models/user';


@Injectable()
export class UserService {
  private _serverUrl = 'http://localhost:3000';

  constructor(private _http: HttpService) {
  }

  public getTopUsers(): Observable<User[]> | null {
    return this._http.get<IUser[]>(this._serverUrl + `/users`)
      .pipe(map(response => {
        return response.sort((a, b) => b.score - a.score).slice(0, 10).map(element =>
          User.from(element));
      }));
  }
}
