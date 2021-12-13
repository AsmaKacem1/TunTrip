import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { FrontLayoutsComponent } from './front-layouts/front-layouts.component';
import { NavbarFComponent } from './front-layouts/navbarFront/navbar-f/navbar-f.component';
import { NavbarUComponent } from './user-layouts/navbarUser/navbar-u/navbar-u.component';
import { NavbarAComponent } from './admin-layouts/navbarAdmin/navbar-a/navbar-a.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { AuthUserLayoutComponent } from './auth-user-layout/auth-user-layout.component';
import { AuthFrontLayoutComponent } from './auth-front-layout/auth-front-layout.component';



@NgModule({
  declarations: [
    AdminLayoutsComponent,
    UserLayoutsComponent,
    FrontLayoutsComponent,
    NavbarFComponent,
    NavbarUComponent,
    NavbarAComponent,
    AuthAdminLayoutComponent,
    AuthUserLayoutComponent,
    AuthFrontLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
