import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { MessagesComponent } from './_pages/messages/messages.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { BooksComponent } from './_pages/books/books.component';
import { FilesComponent } from './_pages/files/files.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { InputComponent } from './_components/input/input.component';
import { ButtonComponent } from './_components/button/button.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SettingsComponent,
    MessagesComponent,
    ActivityComponent,
    BooksComponent,
    FilesComponent,
    LoginFormComponent,
    InputComponent,
    ButtonComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
