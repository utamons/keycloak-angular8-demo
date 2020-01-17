import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './guard/app.auth.guard';
import {MainComponent} from './component/home/home';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AppAuthGuard],
    data: {roles: ['Role_CLIENT', 'admin']}
  },
  {
    path: 'index.html', redirectTo: '/home', pathMatch: 'full',
    canActivate: [AppAuthGuard],
    data: {roles: ['Role_CLIENT', 'admin']}
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['Role_CLIENT', 'admin']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule {
}
