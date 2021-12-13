import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonastirComponent } from '../monastir.component';

const routes: Routes = [
  {path:'',component:MonastirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonastirRoutingModule { }
