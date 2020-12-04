import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserService } from '@features/top-users/services/user.service';
import { QuestionService } from '@features/game/services/question.service';

import { FeatureRoutingModule } from '@features/feature-routing.module';
import { HomeModule } from '@features/home/home.module';
import { GameModule } from '@features/game/game.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    GameModule,
  ],
  providers: [
    QuestionService,
    UserService,
  ],
})
export class FeatureModule { }
