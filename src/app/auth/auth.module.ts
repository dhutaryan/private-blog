import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthRoutingModule } from './auth.routing';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [LoginComponent],
})
export class AuthModule { }
