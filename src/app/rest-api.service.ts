import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  constructor(private  http: HttpClient) { }

  public login(userName: string, password: string){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(userName + ':' + password)});
    return this.http.post('http://localhost:10001/api/admin/options', null, {headers, responseType: 'text' as 'json'});
  }
}
