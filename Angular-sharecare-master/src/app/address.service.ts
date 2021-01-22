import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient) { }

  baseurl = "http://localhost:8081/";

  public addAddress(address: Address): Observable<any> {
    return this._http.post<any>(this.baseurl + "addAddress", address)
  }


}
