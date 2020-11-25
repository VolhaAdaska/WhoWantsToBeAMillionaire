import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgStackFormsModule } from '@ng-stack/forms';
import { LoggerService } from '@shared/services/logger.services';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    NgStackFormsModule,
    CommonModule,
  ],
  providers: [
    LoggerService,
  ],
})
export class SharedModule { }
