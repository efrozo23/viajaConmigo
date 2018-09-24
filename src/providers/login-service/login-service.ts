import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../Model/LoginModel';

import { Observable } from 'rxjs/Observable'; 

import { User } from '../../Model/User';


/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private BASE_URL: string = "http://localhost:61868/api/";

  private header:HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8')
  

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(loginModule: LoginModel):Observable<User> {
    return this.http.post<User>(this.BASE_URL +"Authorization", loginModule, {headers : this.header});
  }

}
