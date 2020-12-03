import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '@core/http/http-service/http-service';

import { RANG_URL } from '@shared/routes/api.routes';
import { Question, IQuestion } from '@features/game/model/game';


@Injectable()
export class QuestionService {

  constructor(private _http: HttpService) {
  }

  public getQuestion(rang: number): Observable<Question[]> | null {
    return this._http.get<IQuestion[]>(RANG_URL + rang)
      .pipe(map(response => {
        return response.map(element =>
          Question.from(element));
      }));
  }
}
