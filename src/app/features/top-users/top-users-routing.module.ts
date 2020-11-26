import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopUsersComponent } from '@features/top-users/top-users.component';


const routes: Routes = [
  {
    path: '',
    component: TopUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopUsersRoutingModule { }

