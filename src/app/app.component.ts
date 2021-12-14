import { Component } from '@angular/core';
import { AuthservicesService } from './auth/service/authservices.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'instablog';

  constructor(
    private _services:AuthservicesService,
    private _router:Router,
    private toast: ToastrService
  ) { }

  // logedIn trigger
  logedIn = localStorage.getItem('userId')

  ngOnInit(){
    this._router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.logedIn = localStorage.getItem('userId')
      }
    })  
  }

  // logout
  logout(){
    this._services.logout()
    localStorage.clear()
    location.reload()
    this.toast.info("You are now logged out")
  }
}
