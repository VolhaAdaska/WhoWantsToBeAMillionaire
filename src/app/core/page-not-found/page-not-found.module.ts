import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '@core/page-not-found/page-not-found.component';

import { AuthService } from '@core/auth/auth-services/auth.service';

import { PageNotFoundRoutingModule } from '@core/page-not-found/page-not-found-routing.module';


@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    PageNotFoundRoutingModule,
  ],
  providers: [
     AuthService,
  ],
})
export class PageNotFoundModule { }
