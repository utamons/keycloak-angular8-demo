import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppAuthGuard} from './guard/app.auth.guard';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent ,
    canActivate: [AppAuthGuard],
    data: { roles: ['Role_CLIENT' , 'admin'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
