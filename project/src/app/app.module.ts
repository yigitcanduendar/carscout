import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessageProviderService } from './services/messageprovider.service';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { ImpressumComponent } from './components/legal-information/impressum/impressum.component';
import { AgbComponent } from './components/legal-information/agb/agb.component';
import { PrivacyPolicyComponent } from './components/legal-information/privacy-policy/privacy-policy.component';
import { Md5 } from 'ts-md5';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessageboxComponent,
    ImpressumComponent,
    AgbComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MessageProviderService, Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
