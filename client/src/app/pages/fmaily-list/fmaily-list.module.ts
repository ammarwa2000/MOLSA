import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmailyListComponent } from './fmaily-list.component';
import { FmailyListRoutingModule } from './fmaily-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FmailyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FmailyListComponent
  ]
})
export class FmailyListModule { }
