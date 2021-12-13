import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination/destination.component';


@NgModule({
  declarations: [
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule
  ]
})
export class DestinationModule { }
