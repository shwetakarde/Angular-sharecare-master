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

  public getUser(id: Number): Observable<User> {
    return this._http.get<any>(this.baseurl + 'myprofile/' + id);
  }


  sendEmail(email: User): Observable<User> {
    return this._http.post<User>(`${this.baseurl + "sendKeyByEmail"}`, email);
  }

  public getUserByEmail(email: String): Observable<User> {
    return this._http.get<User>(this.baseurl + "getUserByEmail/" + email);
  }

  public updateUser(id: Number, user: User): Observable<User> {
    return this._http.put<User>(`${this.baseurl + "updateUser"}/${id}`, user);
  }
}
