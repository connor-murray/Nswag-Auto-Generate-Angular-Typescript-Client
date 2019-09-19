import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {API_BASE_URL, ValuesClient} from './app.generated';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    ValuesClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
