import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@features/home/home.component';
import { GameComponent } from '@features/game/game.component';

import { UserService } from '@features/services/user.service';

import { FeatureRoutingModule } from '@features/feature-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    FeatureRoutingModule,
  ],
  providers: [
    UserService,
  ],
})
export class FeatureModule { }
