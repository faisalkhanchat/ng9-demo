import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountService } from './services/account.service';
import { AccountGuard } from 'src/app/services/gaurds/account-gard/account.guard';


const inrRoute: Routes = [
  {
    path: '', component: AccountsComponent, children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), data: { num: 1 } },
      { path: 'forgot', loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotModule), data: { num: 2 } },
      { path: 'reset/:token', loadChildren: () => import('./pages/reset/reset.module').then(m => m.ResetModule) },
      // { path: 'signup', loadChildren: () => import('./pages/sigup/sigup.module').then(m => m.SigupModule) },
    ] , canActivate: [AccountGuard]
  }
];


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
  ],
  providers: [AccountService]
})
export class AccountsModule { }
