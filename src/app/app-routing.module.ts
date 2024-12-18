import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardTaskComponent} from './card-task/components/card-task/card-task.component';

const routes: Routes = [
  { path: '', component: CardTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
