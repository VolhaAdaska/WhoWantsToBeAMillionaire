import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Answer, Question } from '@features/game/model/game';


@Component({
  selector: 'wwtbm-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameDisplayComponent implements OnInit {

  @Input() public question: Question;
  @Output() public answerEmmiter: EventEmitter<Answer>;

  constructor() {
    this.answerEmmiter = new EventEmitter<Answer>();
  }

  public ngOnInit(): void {
  }

  public answerQuestion(answer: Answer): void {
    this.answerEmmiter.emit(answer);
  }
}
