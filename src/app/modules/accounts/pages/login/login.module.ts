import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const inrRoute: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    FormErrorModule
  ]
})
export class LoginModule { }
