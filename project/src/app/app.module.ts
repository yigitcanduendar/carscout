import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { BenutzerComponent } from './src/model/benutzer/benutzer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    BenutzerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
