import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { Routes, RouterModule } from '@angular/router';


const inrRoute: Routes = [
  {
    path: '', component: AccountsComponent, children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'forgot', loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotModule), },
      { path: 'reset/:token', loadChildren: () => import('./pages/reset/reset.module').then(m => m.ResetModule) },
    ]
  }
];


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
  ],
})
export class AccountsModule { }
