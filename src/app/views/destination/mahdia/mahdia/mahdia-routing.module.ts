import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahdiaComponent } from '../mahdia.component';

const routes: Routes = [
  {path:'',component:MahdiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahdiaRoutingModule { }
