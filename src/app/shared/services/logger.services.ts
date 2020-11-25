import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

  constructor() {
  }

  public error(err: string): void {
   if (!err) { return; }
    console.log('error', err);
  }
}
