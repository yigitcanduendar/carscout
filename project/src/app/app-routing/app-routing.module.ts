import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { HomeComponent } from '../home/home.component';

// Routing-----------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
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
