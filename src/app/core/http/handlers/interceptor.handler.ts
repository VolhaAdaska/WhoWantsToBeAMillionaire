import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpBackend } from '@angular/common/http';
import { InjectionToken, Injector } from '@angular/core';

import { Observable } from 'rxjs';


export class InterceptorHandler implements HttpHandler {
  public constructor(
    private _next: HttpHandler,
    private _interceptor: HttpInterceptor,
  ) { }

  public handle(req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    return this._interceptor.intercept(req, this._next);
  }
}

export class BackendInterceptorHandler implements HttpHandler {

  private _chain: HttpHandler | null = null;

  public constructor(
    private _backend: HttpBackend,
    private _injector: Injector,
    private _interceptors: InjectionToken<HttpInterceptor[]>,
  ) { }

  public handle(req: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    if (this._chain === null) {
      const interceptors = this._injector.get(this._interceptors, []);
      this._chain = interceptors.reduceRight(
        (next, interceptor) => new InterceptorHandler(next, interceptor),
        this._backend,
      );
      return this._chain.handle(req);
    }
  }
}
