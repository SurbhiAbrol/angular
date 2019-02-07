import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackserviceService {
url: string;

  constructor(private http: HttpClient) {
  // tslint:disable-next-line:max-line-length
  this.url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=8976bda247e1f16a2e7dc120dec70254&format=json&limit=10';
 // this.ress = this.http.get(this.url);
  }

// tslint:disable-next-line:no-unused-expression
 // public getTrackDetails(); : Observable < Track[] > {
  // return this.http.get<Track[]>(this.url);
// }

getTracks() {
 return this.http.get(this.url);
}
}


