import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from "./guards/auth.guard";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { GoogleRegisterComponent } from "./components/google-register/google-register.component";
import { GoogleComponent } from "./components/google/google.component";
import { PermissionGuard } from "./guards/permission.guard";
import { ManagementComponent } from "./components/management/management.component";
import { ManagementEditComponent } from './components/management-edit/management-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'google/:token', component: GoogleComponent },
  { path: 'google_register/:userData', component: GoogleRegisterComponent },
  { path: 'user/:username', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'management', component: ManagementComponent, canActivate: [AuthGuard, PermissionGuard], data: { roles: ["Admin", "Moderator"] } },
  { path: 'management_edit/:username', component: ManagementEditComponent, canActivate: [AuthGuard, PermissionGuard], data: { roles: ["Admin", "Moderator"] } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
