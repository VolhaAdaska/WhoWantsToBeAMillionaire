import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routeNamesObjFactory } from '@shared/routes/route-names';


const routeNames = routeNamesObjFactory();
const routes: Routes = [
  {
    path: routeNames.login,
    loadChildren: () => import('@core/auth/login/login/login.module')
    .then(m => m.LoginModule),
  },
  {
    path: routeNames.register,
    loadChildren: () => import('@core/auth/register/register.module')
    .then(m => m.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }

