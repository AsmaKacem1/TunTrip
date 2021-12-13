import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SousseComponent } from '../sousse.component';

const routes: Routes = [
  {path:'',component:SousseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SousseRoutingModule { }
