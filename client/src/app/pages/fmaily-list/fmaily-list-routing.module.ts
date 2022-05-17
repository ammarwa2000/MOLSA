import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FmailyListComponent } from './fmaily-list.component';

const routes: Routes = [
  {
    path: '',
    component: FmailyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmailyListRoutingModule { }
