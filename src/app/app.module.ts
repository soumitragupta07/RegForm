import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { PasswordFormComponent } from './shared/customComponents/password-form/password-form.component';
import { ProfileFormComponent } from './shared/customComponents/profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    PasswordFormComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RegistrationFormComponent]
})
export class AppModule { }
