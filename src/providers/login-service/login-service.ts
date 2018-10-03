import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../Model/LoginModel';

import { Observable } from 'rxjs/Observable'; 

import { User } from '../../Model/User';
import { UtilUrl } from '../../Util/CONSTURL';



/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private header:HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin' , '*').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT').set('Accept','application/json').set('content-type','application/json');
  
  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }
  login(loginModule: LoginModel):Observable<User> {
    return this.http.post<User>(UtilUrl.BASE_URL +"Autentication", loginModule, {headers : this.header});
  }
}

