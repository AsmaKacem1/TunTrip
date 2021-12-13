import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddElementComponent } from './add-element.component';

const routes: Routes = [
  {path:'',component:AddElementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddElementRoutingModule { }
