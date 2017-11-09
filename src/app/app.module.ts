import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService, AuthGuardService } from './shared';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent, canActivate: [AuthGuardService]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    OAuthModule.forRoot()
  ],
  providers: [AuthGuardService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
