import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { Routes, RouterModule } from '@angular/router';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';

const inrRoute: Routes = [
  { path: '', component: ForgotComponent}
];

@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    FormErrorModule,
    MatButtonModule
  ]
})
export class ForgotModule { }
