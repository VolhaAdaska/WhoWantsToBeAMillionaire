import { NgModule } from '@angular/core';

import { HomeComponent } from '@features/home/home.component';

import { HomeRoutingModule } from '@features/home/home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [
  ],
})
export class HomeModule { }
