import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AgbComponent } from '../components/legal-information/agb/agb.component';
import { ImpressumComponent } from '../components/legal-information/impressum/impressum.component';
import { PrivacyPolicyComponent } from '../components/legal-information/privacy-policy/privacy-policy.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { RegisterComponent } from '../components/register/register.component';
import { AngebotDetailComponent } from '../components/angebot-detail/angebot-detail.component';
import { ProposalComponent } from '../components/proposal/proposal.component';
import { ResultPageComponent } from '../components/result-page/result-page.component';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { MyAccountComponent } from '../components/my-account/my-account.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

// Routing-----------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'agb', component: AgbComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'results', component: ResultPageComponent },
  { path: 'addCar', component: ProposalComponent },
  { path: 'cars/:id', component: AngebotDetailComponent },
  { path: 'favoriten', component: FavoritesComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }



];
// Ende---------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
