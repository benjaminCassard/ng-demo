import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService) {
    this.oauthService.redirectUri = window.location.origin + '/index.html';
    this.oauthService.clientId = '0oacrjnkvvEWQxHoG0h7';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.issuer = 'https://dev-897815.oktapreview.com';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load discovery document and then try to login the user
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin();
    });
  }
}
