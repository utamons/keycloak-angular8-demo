import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './util/app-init';
import {HttpClientModule} from '@angular/common/http';
import {SsoService} from './service/sso.service';
import {MainComponent} from './component/home/home';
import {NonAuthComponent} from './component/nonauth/nonauth';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NonAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [SsoService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
