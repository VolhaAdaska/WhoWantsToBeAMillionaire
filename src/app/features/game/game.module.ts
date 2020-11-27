import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GameComponent } from '@features/game/game.component';

import { GameRoutingModule } from '@features/game/game-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    GameComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    GameRoutingModule,
  ],
  providers: [
  ],
})
export class GameModule { }
