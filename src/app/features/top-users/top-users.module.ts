import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TopUsersComponent } from '@features/top-users/top-users.component';

import { TopUsersRoutingModule } from '@features/top-users/top-users-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    TopUsersComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
    TopUsersRoutingModule,
  ],
  providers: [
  ],
})
export class TopUsersModule { }
