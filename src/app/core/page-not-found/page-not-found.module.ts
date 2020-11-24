import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from '@core/page-not-found/page-not-found.component';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { PageNotFoundRoutingModule } from '@core/page-not-found/page-not-found-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    PageNotFoundRoutingModule,
  ],
  providers: [
     AuthService,
  ],
})
export class PageNotFoundModule { }
