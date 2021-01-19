import { Injectable } from '@angular/core';
import { Contactus } from './contactus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from './donation';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private _http: HttpClient) { }

  public baseurl = "http://localhost:8081/";
  public addContactus(contactusModel: Contactus): Observable<any> {
    return this._http.post<any>(this.baseurl + "contactus", contactusModel)
  }

  public addDonate(donation: Donation): Observable<any> {
    return this._http.post<any>(this.baseurl + "donate", donation)
  }


}
