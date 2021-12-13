import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeModule } from './home/home.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AddElementComponent } from './views/admin/addElement/add-element/add-element.component';
import { MonastirComponent } from './views/destination/monastir/monastir.component';
import { SousseComponent } from './views/destination/sousse/sousse.component';
import { MahdiaComponent } from './views/destination/mahdia/mahdia.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotfoundComponent,
    AddElementComponent,
    MonastirComponent,
    SousseComponent,
    MahdiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LayoutsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
