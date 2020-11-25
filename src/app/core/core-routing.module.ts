import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ROUTE_NAMES_OBJ_FACTORY } from '@shared/routes/route-names';


const routeNames = ROUTE_NAMES_OBJ_FACTORY();
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
  { path: routeNames.pageNotFound,
    loadChildren: () => import('@core/page-not-found/page-not-found.module')
    .then(m => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }

