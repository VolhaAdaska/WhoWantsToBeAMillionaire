import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from '@core/auth/register/register.component';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { RegisterRoutingModule } from '@core/auth/register/register-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    RegisterRoutingModule,
  ],
  providers: [
    AuthService,
  ],
})
export class RegisterModule { }
