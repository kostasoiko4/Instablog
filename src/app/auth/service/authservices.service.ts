import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private _http:HttpClient) { }

  // Login Api Url
  loginApiUrl = "https://firefighter-2376.instashop.ae/api/users/login"
    
  // Logout Api Url
  logoutApiUrl = "https://firefighter-2376.instashop.ae/api/users/logout"

  // login
  login(credentials:any){
    return this._http.post<any>(this.loginApiUrl, credentials);
  }

  // logout
  logout(){
    return this._http.get<any>(this.logoutApiUrl)
  }
}
