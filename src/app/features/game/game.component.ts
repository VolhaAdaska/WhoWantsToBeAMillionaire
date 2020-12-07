import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { QuestionService } from '@features/game/services/question.service';

import { Answer, Question } from '@features/game/model/game';


@Component({
  selector: 'wwtbm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {

  public question$: Observable<Question>;
  private _rang = 1;

  constructor(private _questionService: QuestionService) { }

  public ngOnInit(): void {
    this.updateQuestion(this._rang);
  }

  public updateQuestion(rang: number): void {
    this.question$ = this._questionService.getQuestion(rang);
  }

  public answerHandler(answer: Answer): void {
    if (answer.isCorrect) {
      this._rang++;
      this.updateQuestion(this._rang);
    }
  }
}
