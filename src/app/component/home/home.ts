import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {SsoService} from '../../service/sso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class MainComponent {

  loggedIn: string;
  test: string;

  constructor(private activatedRoute: ActivatedRoute, private keycloakService: KeycloakService, private ssoService: SsoService) {

    keycloakService.isLoggedIn()
      .then((result) => result ? this.loggedIn = 'Logged in as ' + keycloakService.getUsername() + ', role ' + this.getRole() : 'Not' +
        ' logged in');

    console.log('keycloakService ', keycloakService.getUserRoles());
  }

  getApiTest() {
    this.ssoService.getTest().subscribe(
      result => {
        this.test = result;
      },
      error => {
        this.test = error.error && error.error.message ? error.error.message : error.message;
      });
  }

  private getRole() {
    const roles: string[] = this.keycloakService.getUserRoles(true);
    return roles.filter(x => x.indexOf('USER') > -1);
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200/').then(() => console.log('logged out'));
  }
}
