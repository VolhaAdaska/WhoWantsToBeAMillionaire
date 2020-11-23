import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '@core/auth/auth-services/auth.service';
import { HttpService } from '@core/http/http-service/http-service';

import { CoreRoutingModule } from '@core/core-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';
import { TokenInterceptor } from '@core/http/interceptors/token.interceptor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    CoreRoutingModule,
  ],
  providers: [
    AuthService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule { }
