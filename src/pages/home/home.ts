import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginModel } from '../../Model/LoginModel';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { User } from '../../Model/User';

import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoginServiceProvider]
})
export class HomePage {

  private username: String = "";
  private password: String = "";
  private message: String ="";
  //private userLogin: LoginModel = new LoginModel();
  private user: User;

  constructor(public navCtrl: NavController, public loginService: LoginServiceProvider) {

    //this.userLogin.valuesBase64 = "Z21haGVjaGE6MTNkMTEwMQ==";
    console.log("Ingreso al constructor");
    console.log("Paso a base 64", btoa(this.username.concat(":" + this.password)));

  }

  login() {
   /* this.userLogin.access = "loginData";
    this.userLogin.valuesBase64 = btoa(this.username.concat(":"+this.password));
    console.log("ingreso al login");
    
    this.loginService.login(this.userLogin).subscribe(response =>{
      this.user = response;
    })
*/  if (this.username == "efrozo" && this.password == "123456") {
        localStorage.setItem("userLogin" , this.username+"");
        this.navCtrl.setRoot(WelcomePage);
    }else{
      this.message ="Clave o usuario incorrecto";
    }
  }
}
