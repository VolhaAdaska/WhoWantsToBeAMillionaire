export class Answer {

  public static from(value: IAnswer): Answer {
    return new Answer(value.answer,
      value.isCorrect);
  }

  public get answer(): string {
    return this._answer;
  }

  public get isCorrect(): boolean {
    return this._isCorrect;
  }

  private constructor(
    private _answer: string,
    private _isCorrect: boolean,
    ) {
  }
}

export class Question {

  public static from(value: IQuestion): Question {
    return new Question(value.title,
      value.answers.map(x => Answer.from(x)),
      value.rang);
  }

  public get title(): string {
    return this._title;
  }

  public get answers(): Answer[] {
    return this._answers;
  }

  public get rang(): number {
    return this._rang;
  }

  private constructor(
    private _title: string,
    private _answers: Answer[],
    private _rang: number,
    ) {
  }
}

export interface IQuestion {
  title: string;
  answers: IAnswer[];
  rang: number;
}

export interface IAnswer {
  answer: string;
  isCorrect: boolean;
}


