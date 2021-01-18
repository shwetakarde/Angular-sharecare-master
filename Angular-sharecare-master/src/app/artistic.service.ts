import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artistic } from './artistic';

@Injectable({
  providedIn: 'root'
})
export class ArtisticService {


  constructor(private _http: HttpClient) { }

  public addCreativity(artisticModel: Artistic): Observable<any> {
    return this._http.post<any>("http://localhost:8081/creativity", artisticModel)
  }

  public getcreativity(): Observable<any> {
    return this._http.get<any>("http://localhost:8081/creativitylist");
  }

}
