import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
// import { ImageCroppedEvent } from 'ngx-image-cropper';
// import { UtilityService } from 'src/app/layouts/shared/services/utility.service';
import { ImageCroppedEvent } from '../image-cropper/interfaces';
import { ToastService } from '../../toast-notification/toast.service';

export interface DialogData {
  imageData: string;
  inputRatio: number;
  inputWidth: number;
  banner: boolean;
}
@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})
export class UploadPopupComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  croppedImageFile: any;
  aspectRatio: any = 4 / 4;
  resizeToWidth: any = 350;
  realImage: any = '';
  cropperarea = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  // banner: boolean;
  constructor(
    private dialogRef: MatDialogRef<UploadPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toast: ToastService,
    private snackbar: MatSnackBar
  ) { 
    this.dialogRef._containerInstance._config.autoFocus = false;
    this.dialogRef.addPanelClass('fullPopup');
  }

  ngOnInit() {
    this.dialogRef.addPanelClass('fullPopup');
    this.dialogRef._containerInstance._config.autoFocus = false;
    
    if (this.data) {
      this.data.inputRatio !== undefined ? this.aspectRatio = this.data.inputRatio : '';
      this.data.inputWidth !== undefined ? this.resizeToWidth = this.data.inputWidth : '';
      this.fileChangeEvent(this.data.imgData);
    }

  }
  fileChangeEvent(event: any): void {
    if (event.target.files.length <= 0) {
      return;
    }

    // if (event.target.files[0].size > 5000000) {
    //   this._toast.error('Please select image of less than 5 MB.');
    //   return;
    // }
    // if (event.target.files[0].size < 20000) {
    //   this._toast.error('Please select more than 20 KB image.');
    //   return;
    // }
    let typesOfImages = [];
    if (event.target.files[0].type !== '') {
      typesOfImages = (event.target.files[0].type).split('/');
    }
    if (typesOfImages.length !== 0 && (typesOfImages[1].toLowerCase() === 'png' ||
      typesOfImages[1].toLowerCase() === 'jpg' || typesOfImages[1].toLowerCase() === 'jpeg')) {
      this.realImage = event.target.files[0];
      this.imageChangedEvent = event;
    } else {
      this._toast.error('Uploaded file is not a valid image. Only JPG, JPEG & PNG files are allowed')
    }

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.croppedImageFile = event.file;
  }

  imageLoaded() { }

  cancel() {
    this.dialogRef.close(false);
  }

  dataURLtoFile(dataurl, filename = new Date().getTime() + '.png') {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  cropped() {
    if (!this.croppedImage) {
      this._toast.error('Please upload image (Only JPG, PNG & JPEG)');
      return;
    }
    this.croppedImageFile = this.dataURLtoFile(this.croppedImage, this.realImage.name);
    this.dialogRef.close({ cropFile: this.croppedImageFile, cropBase64: this.croppedImage, real: this.realImage });
  }

}

