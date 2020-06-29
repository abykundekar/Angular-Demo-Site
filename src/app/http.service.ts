import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http : HttpClient) { 
  }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
   }
  getMenu(){
    return this.http.get('http://192.168.0.5:9000/mngt/WMC/123');
  }
}
