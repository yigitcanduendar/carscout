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
import { CookieModule } from 'ngx-cookie';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AngebotDetailComponent } from './components/angebot-detail/angebot-detail.component'
import { ProposalComponent } from './components/proposal/proposal.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { SearchComponent } from './components/search/search.component';
import { SearchServiceService } from './services/search-service.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarscoutRestApiService } from './services/carscout-rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessageboxComponent,
    ImpressumComponent,
    AgbComponent,
    PrivacyPolicyComponent,
    LogoutComponent,
    RegisterComponent,
    AngebotDetailComponent,
    ProposalComponent,
    ResultPageComponent,
    SearchComponent,
    FavoritesComponent,
    MyAccountComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CookieModule.forRoot(),
    HttpClientModule
  ],
  providers: [SearchServiceService, MessageProviderService, { provide: APP_BASE_HREF, useValue: '/' }, Md5, CarscoutRestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
