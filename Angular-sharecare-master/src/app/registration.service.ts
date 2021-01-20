import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  public baseurl = "http://localhost:8081/";

  public loginAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post<any>(this.baseurl + "adminlogin", admin)
  }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(this.baseurl + "login", user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>(this.baseurl + "registeruser", user)
  }
}
