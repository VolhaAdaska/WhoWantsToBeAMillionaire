import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@core/auth/login/login/login.component';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { LoginRoutingModule } from '@core/auth/login/login/login-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    LoginRoutingModule,
  ],
  providers: [
     AuthService,
  ],
})
export class LoginModule { }
