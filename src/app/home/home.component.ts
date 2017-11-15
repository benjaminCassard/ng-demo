import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username;
  password;

  constructor(private oauthService: OAuthService, private oktaAuthWrapper: OktaAuthWrapper) { }

  login() {
    this.oauthService.initImplicitFlow();
  }

  loginWithPassword() {
    this.oktaAuthWrapper.login(this.username, this.password)
      .then(_ => console.debug('logged in'))
      .catch(err => console.error('error logging in', err));
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if(!claims) {
      return null;
    }
    return claims['name'];
  }

  ngOnInit() {
  }

}
