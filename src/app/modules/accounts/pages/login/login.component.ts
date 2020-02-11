import { AccountService } from './../../services/account.service';
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/components/form-field';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { ImageUpdaterService } from 'src/app/services/image-updater/image-updater.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.Native, // open the shadow dom in html
  // encapsulation: ViewEncapsulation.Emulated,  // initial proper of component
  // encapsulation: ViewEncapsulation.None,     // apply component css global
})
export class LoginComponent implements OnInit {
  hide = true; iserror = false; emailMatch = false;
  loginForm: FormGroup;
  userList;

  @ViewChild('email', { static: true }) email: ElementRef;
  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService,
    private _storageService: StorageService,
    private toastService: ToastService,
    private imageUpdaterService: ImageUpdaterService
  ) {
  }

  ngOnInit() {
    this.email.nativeElement.focus();
    this.createForm();
  }

  createForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, ...CustomValidators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.disable();
    this._accountService.login(this.loginForm.value).subscribe(response => {
      if (response.statusCode === 200) {
        const token = response.data.token;
        this._storageService.loginSuccessfully(token);
        const data = {
          image: response.data.image,
          name: response.data.name
        };
        this.imageUpdaterService.setImage(data);
      } else {
        this.loginForm.enable();
        this.toastService.error(response.message);
      }
    }, (error) => {
      this.loginForm.enable();
      this.toastService.error(error.message);
    });
  }
}
