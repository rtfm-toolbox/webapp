import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './guards/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  
  {
    path: 'devices',
    loadChildren: () => import('./modules/devices/devices.module').then(m => m.DevicesModule)
  },
  
  {
    path: 'spacecontrol',
    loadChildren: () => import('./modules/space-control/space-control.module').then(m => m.SpaceControlModule)
  },

  {
    path: 'signage',
    loadChildren: () => import('./plugins/toolbox-signage/toolbox-signage.module').then(m => m.ToolboxSignageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
