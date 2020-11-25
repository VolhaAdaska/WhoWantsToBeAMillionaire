import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable, from } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.handleAccess(request, next));
  }

  private handleAccess(request: HttpRequest<unknown>, next: HttpHandler): Promise<HttpEvent<unknown>> {
   // TODO add token
    request = request.clone({
     setHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    },
   });
   return next.handle(request).toPromise();
  }
}
