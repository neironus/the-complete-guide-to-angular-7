import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertAppComponent } from './alert-app/alert-app.component';
import { AppComponent } from './app.component';
import { SuccessAppComponent } from './success-app/success-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertAppComponent,
    SuccessAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
