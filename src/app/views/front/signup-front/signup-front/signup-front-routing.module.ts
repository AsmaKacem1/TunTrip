import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupFrontComponent } from './signup-front.component';

const routes: Routes = [
  {path:'',component:SignupFrontComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupFrontRoutingModule { }
