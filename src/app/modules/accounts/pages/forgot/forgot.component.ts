import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/components/form-field';
import { AccountService } from '../../services/account.service';
import { ToastService } from 'src/app/components/toast-notification/toast.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss', '../../pages/login/login.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  constructor( private _formBuilder: FormBuilder, private accountService: AccountService, private toastService: ToastService ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.forgotForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onForgot() {
    if (this.forgotForm.invalid) {
      console.log('invalid');
      return;
    }
    console.log('valid');
    this.accountService.forgot(this.forgotForm.value).subscribe((res) => {
      if (res['statusCode'] === 200) {
        this.toastService.success('Email has been sent to your email.');
      } else {
        this.toastService.error(res['message']);
      }
    }, err => {
      this.toastService.error(err);
    });
    console.log(this.forgotForm.value);

  }


}
