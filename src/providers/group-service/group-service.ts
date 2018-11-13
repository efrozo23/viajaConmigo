import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, group } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Group } from '../../Model/Group';
import { UtilUrl } from '../../Util/CONSTURL';

/*
  Generated class for the GroupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupServiceProvider {

  private header: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT').set('Accept', 'application/json').set('content-type', 'application/json');

  constructor(public http: HttpClient) {
    console.log('Hello GroupServiceProvider Provider');
  }

  saveGroup(group: Group): Observable<String> {

    return this.http.post<String>(UtilUrl.BASE_URL + "creargrupo.php", group, { headers: this.header });
  }

  getMyGroup(idUser:number):Observable<any>{
    return this.http.get<any>(UtilUrl.BASE_URL+"listargrupos.php?idusuario="+idUser,{headers:this.header});
  }

  listUserByGroup(idGroup:number):Observable<any>{
    return this.http.get<any>(UtilUrl.BASE_URL+"listarusuarios.php?idgrupo="+idGroup,{headers:this.header})
  }

}
