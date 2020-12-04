import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GameComponent } from '@features/game/game.component';
import { GameDisplayComponent } from './game-display/game-display.component';


import { GameRoutingModule } from '@features/game/game-routing.module';


@NgModule({
  declarations: [
    GameComponent,
    GameDisplayComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    GameRoutingModule,
  ],
  providers: [
  ],
})
export class GameModule { }
