import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private _http: HttpClient) { }
  private baseurl = "http://localhost:8081/";

  public getuser(): Observable<any> {
    return this._http.get(this.baseurl + "userlist");
  }

  public deleteUser(id: Number): Observable<any> {
    return this._http.delete(this.baseurl + "deleteUser" + "/" + id);
  }

}
