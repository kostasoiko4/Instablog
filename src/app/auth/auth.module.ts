import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthservicesService } from './service/authservices.service';
import { LandmarksApiservicesService } from '../service/landmarksapiservices.service';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [AuthservicesService],
})
export class AuthModule { }
