import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ROUTE_NAMES_OBJ_FACTORY } from '@shared/routes/route-names';


const routeNames = ROUTE_NAMES_OBJ_FACTORY();
const routes: Routes = [
  {
    path: routeNames.topUsers,
    loadChildren: () => import('@features/top-users/top-users.module')
    .then(m => m.TopUsersModule),
  },
  {
    path: routeNames.home,
    loadChildren: () => import('@features/home/home.module')
    .then(m => m.HomeModule),
  },
  {
    path: routeNames.game,
    loadChildren: () => import('@features/game/game.module')
    .then(m => m.GameModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }

