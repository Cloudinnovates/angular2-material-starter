import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { NavResponsiveComponent } from './nav-responsive/nav-responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavComponent,
    NavResponsiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
