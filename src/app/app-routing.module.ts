import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './guard/app.auth.guard';
import {MainComponent} from './component/home/home';
import {NonAuthComponent} from './component/nonauth/nonauth';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AppAuthGuard],
    data: {roles: ['USER1', 'USER2']}
  },
  {
    path: 'index.html', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AppAuthGuard],
    data: {roles: ['USER1', 'USER2']}
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['USER1', 'USER2']}
  },
  {
    path: 'nonauth',
    component: NonAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule {
}
