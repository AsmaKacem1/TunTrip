import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { AuthFrontLayoutComponent } from './layouts/auth-front-layout/auth-front-layout.component';
import { AuthUserLayoutComponent } from './layouts/auth-user-layout/auth-user-layout.component';
import { FrontLayoutsComponent } from './layouts/front-layouts/front-layouts.component';
import { UserLayoutsComponent } from './layouts/user-layouts/user-layouts.component';
import { MahdiaComponent } from './views/destination/mahdia/mahdia.component';
import { MonastirComponent } from './views/destination/monastir/monastir.component';
import { SousseComponent } from './views/destination/sousse/sousse.component';
//import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  //{path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  //{path:'user/login',component:AuthUserLayoutComponent},
  {path:'signup',component:AuthFrontLayoutComponent},
  {path:'monastir',component:MonastirComponent},
  {path:'sousse',component:SousseComponent},
  {path:'mahdia',component:MahdiaComponent},
  {path:'login',component:AuthUserLayoutComponent},
  {path:'contact',redirectTo:'',pathMatch:'full',},
  //{path:'**',component:NotfoundComponent},
  {path:'admin',component:AdminLayoutsComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'add-element',loadChildren:()=>import('./views/admin/addElement/add-element/add-element.module').then(m=>m.AddElementModule)},

  ]},
  {path:'user',component:UserLayoutsComponent,children:[
    //{path:'destination-u',loadChildren:()=>import('./views/user/destination-u/destination-u/destination-u.module').then(m=>m.DestinationUModule)},
    {path:'home',loadChildren:()=>import('./views/user/home/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/user/login-user/login-user/login-user.module').then(m=>m.LoginUserModule)},
    {path:'logout',loadChildren:()=>import('./views/user/logout/logout/logout.module').then(m=>m.LogoutModule)},


  ]},

  {path:'',component:FrontLayoutsComponent,children:[
    {path:'destination',loadChildren:()=>import('./views/front/destination/destination.module').then(m=>m.DestinationModule)},





  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
