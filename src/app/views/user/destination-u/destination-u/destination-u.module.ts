import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationURoutingModule } from './destination-u-routing.module';
import { DestinationUComponent } from './destination-u.component';


@NgModule({
  declarations: [
    DestinationUComponent
  ],
  imports: [
    CommonModule,
    DestinationURoutingModule
  ]
})
export class DestinationUModule { }
