import { MatInputModule, MatIconModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigupComponent } from './sigup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormErrorModule } from 'src/app/pipes/form-error/form-error.module';
import { SelectCountryModule } from 'src/app/components/select-country/select-country.module';

const inrRoute: Routes = [
  { path: '', component: SigupComponent}
];


@NgModule({
  declarations: [SigupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormErrorModule,
    SelectCountryModule
  ]
})
export class SigupModule { }
