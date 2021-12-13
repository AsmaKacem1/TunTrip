import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationUComponent } from './destination-u.component';

const routes: Routes = [
  {path:'',component:DestinationUComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationURoutingModule { }
