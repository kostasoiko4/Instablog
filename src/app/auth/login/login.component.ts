import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { AuthservicesService } from '../service/authservices.service';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(
    private _service:AuthservicesService,
    private fb: FormBuilder,
    private location: Location,
    private toast: ToastrService
  ) { }

  // From item
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  // error Message from api
  errorMessage:any
  
  // Log In
  onSubmit() {
    this._service.login(this.loginForm.value)
    .pipe(catchError(error => {
      this.errorMessage = error.error.errorMessage.message
      return throwError(error)
    }))
    .subscribe(response => {
      localStorage.setItem('userId', response.userId)
      localStorage.setItem('sessionToken', response.sessionToken)
      this.location.back()
      this.toast.success("You are now loged in")
    })
  }
}
