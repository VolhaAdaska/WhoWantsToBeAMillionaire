import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { first, take } from 'rxjs/operators';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';
import { ROUTE_NAMES } from '@shared/routes/route-names';
import { IRouteNames } from '@shared/routes/common.interface';
import { LoggerService } from '@shared/services/logger.services';


@Component({
  selector: 'wwtbm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent implements OnInit {

  public get email(): AbstractControl { return this.loginForm.controls.email; }

  public get password(): AbstractControl { return this.loginForm.controls.password; }

  private _loading = false;
  public get loading(): boolean { return this._loading; }

  private _submitted = false;
  public get submitted(): boolean { return this._submitted; }


  private _returnUrl = false;
  public get returnUrl(): boolean { return this._returnUrl; }

  public get registerRouterLink(): string {
    return this._routeNames.register;
  }

  private _loginForm: FormGroup;
  public get loginForm(): FormGroup {
    return this._loginForm;
  }

  constructor(
    @Inject(ROUTE_NAMES) private _routeNames: IRouteNames,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _logger: LoggerService,
  ) { }

  public ngOnInit(): void {
    this._loginForm = this._formBuilder.group<{ email: string, password: string }>({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  public onSubmit(): void {
    this._submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this._loading = true;

    this._authService.login(this.email.value, this.password.value)
      .pipe(take(1))
      .subscribe(
        data => {
          if (data) {
            this._router.navigate([this._routeNames.home]);
          } else {
            this._loginForm.controls['email'].setErrors({'isUserNotExist': true});
            this._loading = false;
          }
        },
        error => {
          this._router.navigate([this._routeNames.pageNotFound]);
          this._logger.error(error);
          this._loading = false;
        });

  }
}
