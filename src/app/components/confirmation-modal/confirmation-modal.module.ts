import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmationModalComponent],
  exports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class ConfirmationModalModule { }
