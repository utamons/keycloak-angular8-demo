import {Component, Inject} from '@angular/core';
import {SsoService} from './service/sso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Keycloak Demo (Angular 8)';

  constructor(private ssoService: SsoService) {}

  getTest() {
    return this.ssoService.getTest();
  }
}
