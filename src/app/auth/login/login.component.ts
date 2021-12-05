import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { AuthservicesService } from '../service/authservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(
    private _service:AuthservicesService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  // From item
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  // submit trigger
  submited = false
  
  // Log In
  onSubmit() {
    this.submited = true
    this._service.login(this.loginForm.value)
    .subscribe(response => {
      localStorage.setItem('userId', response.userId)
      localStorage.setItem('sessionToken', response.sessionToken)
      this.location.back()
    })
  }
}
