import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ValidateService } from './services/validate.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoogleRegisterComponent } from './components/google-register/google-register.component';
import { GoogleComponent } from './components/google/google.component';
import { ManagementComponent } from './components/management/management.component';
import { PermissionGuard } from './guards/permission.guard';
import { ManagementEditComponent } from './components/management-edit/management-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    NotFoundComponent,
    GoogleRegisterComponent,
    GoogleComponent,
    ManagementComponent,
    ManagementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ValidateService, ApiService, AuthGuard,PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
