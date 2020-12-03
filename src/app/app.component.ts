import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { ROUTE_NAMES } from '@shared/routes/route-names';
import { IRouteNames } from '@shared/routes/common.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(ROUTE_NAMES) private _routeNames: IRouteNames,
    private _router: Router,
    private _authService: AuthService,
    ) {
  }

  public logout(): void {
    this._authService.logout();
    this._router.navigate([this._routeNames.login]);
  }

  get isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  public get registerRouterLink(): string {
    return this._routeNames.register;
  }

  public get loginRouterLink(): string {
    return this._routeNames.login;
  }

  public get topUserRouterLink(): string {
    return this._routeNames.topUsers;
  }

  public get gameRouterLink(): string {
    return this._routeNames.game;
  }

  public get homeRouterLink(): string {
    return this._routeNames.home;
  }

}
