import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss', '../../pages/login/login.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  constructor( private _formBuilder: FormBuilder ) {
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
    console.log(this.forgotForm.value);

  }


}
