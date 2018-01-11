import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderModule} from "./modules/header/header.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [,
    HeaderModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
