import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginFormComponent } from './login/login-form/login-form.component';


import { SettingsComponent } from './_pages/settings/settings.component';
import { MessagesComponent } from './_pages/messages/messages.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { BooksComponent } from './_pages/books/books.component';
import { FilesComponent } from './_pages/files/files.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const parentTitle = 'Octom - '

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'dashboard'
  },
  {
    path: 'activity',
    component: ActivityComponent,
    title: parentTitle + 'activity'
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path:'settings',
    component: SettingsComponent,
    title: parentTitle + 'settings'
  },
  {
    path:'messages',
    component: MessagesComponent,
    title: parentTitle + 'messages'
  },
  {
    path:'files',
    component: FilesComponent,
    title: parentTitle + 'files'
  },

  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login-form',
        component: LoginFormComponent,
        title: parentTitle + 'login-form'
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: parentTitle + 'register'
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: parentTitle + 'forgot password'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/login/login-form',
    pathMatch: 'full'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
