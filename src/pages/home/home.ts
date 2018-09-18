import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginModel } from '../../Model/LoginModel';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { User } from '../../Model/User';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[LoginServiceProvider]
})
export class HomePage {

  private username: String = "elrozoor";
  private password: String= "12143234";
  private userLogin : LoginModel;
  private user: User;

  constructor(public navCtrl: NavController, public loginService : LoginServiceProvider) {
    this.userLogin.access = "loginData";
    this.userLogin.valuesBase64 = "Z21haGVjaGE6MTNkMTEwMQ==";
    console.log("Ingreso al constructor");
    
    loginService.login(this.userLogin).suscribe(response =>{
      this.user = response;
    });
  }

  login(){
    
  }
}
