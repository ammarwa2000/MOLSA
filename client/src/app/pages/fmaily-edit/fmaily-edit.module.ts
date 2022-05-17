import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmailyEditComponent } from './fmaily-edit.component';
import { FmailyEditRoutingModule } from './fmaily-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FmailyEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FmailyEditComponent
  ]
})
export class FmailyEditModule { }
