import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthRoutingModule } from './auth.routing';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  exports: [LoginComponent],
})
export class AuthModule { }
