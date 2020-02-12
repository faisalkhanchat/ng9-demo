
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom, // open the shadow dom in html
  encapsulation: ViewEncapsulation.Emulated,  // initial property of component
  // encapsulation: ViewEncapsulation.None,     // apply component css global
})
export class LoginComponent implements OnInit {
  hide = true; iserror = false; emailMatch = false;
  loginForm: FormGroup;
  userList;

  @ViewChild('email', { static: true }) email: ElementRef;
  constructor(
    private _fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.email.nativeElement.focus();
    this.createForm();
  }

  createForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.disable();
   
  }
}
