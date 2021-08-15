import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { UserComponent } from './user';
import { ContactComponent } from './contact';
import { ServiceComponent } from './service';
import { OrderComponent } from './order';
import { ProductComponent } from './product';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
