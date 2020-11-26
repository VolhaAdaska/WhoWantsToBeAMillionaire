import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from '@features/game/game.component';
import { HomeComponent } from '@features/home/home.component';

import { ROUTE_NAMES_OBJ_FACTORY } from '@shared/routes/route-names';


const routeNames = ROUTE_NAMES_OBJ_FACTORY();
const routes: Routes = [
  {
    path: routeNames.topUsers,
    loadChildren: () => import('@features/top-users/top-users.module')
    .then(m => m.TopUsersModule),
  },
  { path: routeNames.game, component: GameComponent },
  { path: routeNames.home, component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }

