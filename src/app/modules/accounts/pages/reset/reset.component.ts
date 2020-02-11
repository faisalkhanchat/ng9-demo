import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMON_MESSAGES } from 'src/app/constants/messages';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGIN } from 'src/app/constants/absolute-route';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss', '../../pages/login/login.component.scss']
})
export class ResetComponent implements OnInit {
  hide = true;
  hide2 = true;
  token: string;
  public resetForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.token = this.activatedRoute.snapshot.params['token'];
    }

  ngOnInit() {
    this.createForm();
    console.log(this.token);
  }

  createForm() {
    this.resetForm = this._formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    }, {
      // validator: [CustomValidators.matchPassword] // your validation method
    });
  }

  onReset() {
    if (this.resetForm.invalid) {
      return;
    }
    this.resetForm.value.token = this.token;
  }

  goBack() {
    setTimeout(() => {
      this.router.navigate([LOGIN]);
    }, 500);
  }

}


