import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscenaComponent } from './home/escena/escena.component';
import { TextHomeComponent } from './home/text-home/text-home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent,
    TextHomeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
