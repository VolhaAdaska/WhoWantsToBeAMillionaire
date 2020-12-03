import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';
import { IForm } from '@shared/models/user';
import { ROUTE_NAMES } from '@shared/routes/route-names';
import { IRouteNames } from '@shared/routes/common.interface';


@Component({
  selector: 'wwtbm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  get firstName(): AbstractControl { return this.registerForm.controls.firstName; }

  get lastName(): AbstractControl { return this.registerForm.controls.lastName; }

  get email(): AbstractControl { return this.registerForm.controls.email; }

  get password(): AbstractControl { return this.registerForm.controls.password; }

  public get loginRouterLink(): string {
    return this._routeNames.login;
  }

  private _submitted = false;
  get submitted(): boolean { return this._submitted; }

  private _loading = false;
  get loading(): boolean { return this._loading; }

  private _registerForm: FormGroup<IForm>;
  public get registerForm(): FormGroup<IForm> {
    return this._registerForm;
  }

  constructor(
    @Inject(ROUTE_NAMES) private _routeNames: IRouteNames,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router) { }

  public ngOnInit(): void {
    this._registerForm = this._formBuilder.group<IForm>({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public async onSubmit(): Promise<void> {
    this._submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this._loading = true;
    const user = this.registerForm.value;
    await this._authService.register(user);
    this._router.navigate([this._routeNames.login]);
  }
}
