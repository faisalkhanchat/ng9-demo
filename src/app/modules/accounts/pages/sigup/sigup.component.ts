import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { CustomValidators } from 'src/app/components/form-field';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss', '../../pages/login/login.component.scss']
})
export class SigupComponent implements OnInit {
  hide = true; iserror = false; emailMatch = false;
  codeSelected = '';
  private userList;
  countries: any;
  signupForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService
  ) { }

  ngOnInit() {
    this.createForm();
    // this.getUserList();
    this.getCountries();
  }

  createForm() {
    this.signupForm = this._fb.group({
      name: ['', [Validators.required, ...CustomValidators.name]],
      email: ['', [Validators.required, ...CustomValidators.email]],
      phone: ['', [Validators.required], ...CustomValidators.phone],
      country_code: ['', [Validators.required, ]],
      password: ['', [Validators.required, ...CustomValidators.password]],
      country: ['', [Validators.required]],
      profile_pic: ['', Validators.required],
      status: ['false']
    });
  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }
    const index = new Date().getTime();
    this.signupForm.value.created_on = index;
    this.signupForm.value.id = index;
    console.log(this.signupForm.value);

    this._accountService.signup(this.signupForm.value).subscribe( (response) => {
      console.log(response);
    });

  }


  getCountries() {
    this._accountService.countries().subscribe((response) => {
      console.log(response);
      this.countries = response;
    });
  }

  validateEmail() {
    console.log(this.signupForm.controls.email.value);
    console.log(this.userList);
    this.userList.filter((data) => {
      if (this.signupForm.controls.email.value !== data.email) {
        this.iserror = false;
        this.signupForm.controls.email.setErrors(null);
      } else {
        this.signupForm.controls.email.setErrors({validateEmail: false});
        this.iserror = true;
      }
    });
    console.log(this.emailMatch);
  }



}
