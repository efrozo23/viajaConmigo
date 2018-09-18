import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../Model/LoginModel';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { User } from '../../Model/User';
import { IfObservable } from 'rxjs/observable/IfObservable';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private BASE_URL :string = "https://bgdpxps9e2.execute-api.us-east-1.amazonaws.com/Prod/api/" ;
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  login(loginModule: LoginModel):Observable<User>{
    console.log("Ingreso al servicio");
    return this.http.post(this.BASE_URL+"Authorization",loginModule);
  }

}
