import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistryModel } from '../../Model/RegistryModel';

import { UtilUrl } from '../../Util/CONSTURL';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BackuserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackuserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BackuserProvider Provider');
  }
  
  private header:HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin' , '*').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT').set('Accept','application/json').set('content-type','application/json');

  public saveuser(user: RegistryModel):Observable<String>{
    console.log(user);
    return this.http.post<String>(UtilUrl.BASE_URL +"registrousuario.php", user, {headers : this.header});
  }
  public edituser(user:RegistryModel):Observable<String>{
    return this.http.put<String>(UtilUrl.BASE_URL+"actualizarusuario.php",user,{headers:this.header});
  }
}
