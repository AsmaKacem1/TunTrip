import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFrontRoutingModule } from './signup-front-routing.module';
import { SignupFrontComponent } from './signup-front.component';


@NgModule({
  declarations: [
    SignupFrontComponent
  ],
  imports: [
    CommonModule,
    SignupFrontRoutingModule
  ]
})
export class SignupFrontModule { }
