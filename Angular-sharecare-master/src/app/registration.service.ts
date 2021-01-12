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



  public loginAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post<any>("http://localhost:8081/adminlogin", admin)
  }

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/login", user)
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/registeruser", user)
  }




}
