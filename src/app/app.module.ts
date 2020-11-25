import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';

import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { FeatureModule } from '@features/feature.module';

import { ROUTE_NAMES, ROUTE_NAMES_OBJ_FACTORY } from '@shared/routes/route-names';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    FeatureModule,
  ],
  providers: [
    {
      provide: ROUTE_NAMES,
      useFactory: ROUTE_NAMES_OBJ_FACTORY,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
