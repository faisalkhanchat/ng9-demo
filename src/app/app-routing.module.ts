import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACCOUNT } from './constants/routes';


const routes: Routes = [
  { path: ACCOUNT, loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }