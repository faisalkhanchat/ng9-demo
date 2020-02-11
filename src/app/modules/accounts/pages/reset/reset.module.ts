
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResetComponent } from './reset.component';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const inrRoute: Routes = [
  { path: '', component: ResetComponent}
];


@NgModule({
  declarations: [ResetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    ReactiveFormsModule,
    MatInputModule,
    FormErrorModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ResetModule { }
