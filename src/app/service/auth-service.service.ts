import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private apiBaseUrl = 'http://localhost:8000'
  constructor(private http: HttpClient) { }
  getHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return headers;
  }

  makeGetApiCall(endpoint: string, params?: { [key: string]: string }): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    const url = `${this.apiBaseUrl}${endpoint}`;
    return this.http.get(url, { headers, params });
  }
  makeApiCall(endpoint:string,params:any):Observable<any>{
    const url = `${this.apiBaseUrl}${endpoint}`
    console.log(url)
    return this.http.post(url,params)
}
registerUser(endPoint:string,payLoad:any):Observable<any>{
  const url = `${this.apiBaseUrl}${endPoint}`
  const headers: HttpHeaders = this.getHeader();
  let newpayload = JSON.stringify(payLoad)
  console.log(url,{payLoad},headers)
  return this.http.post(url,newpayload,{headers})
}
}
