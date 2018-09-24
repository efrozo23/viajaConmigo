import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginModel } from '../../Model/LoginModel';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { User } from '../../Model/User';

import { WelcomePage } from '../welcome/welcome';
import { RegisterUserPage } from '../register-user/register-user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoginServiceProvider]
})
export class HomePage {

  private username: String = "";
  private password: String = "";
  private message: String = "";
  private userLogin: LoginModel = new LoginModel();
  private user: User = new User();

  constructor(public navCtrl: NavController, public loginService: LoginServiceProvider) {
    console.log(this.user.token);

    console.log("Ingreso al constructor");
    console.log("Paso a base 64", btoa(this.username.concat(":" + this.password)));

  }

  login() {

    console.log("ingreso al login");
    this.userLogin.valuesBase64 = btoa(this.username.concat(":" + this.password));
    this.userLogin.access = "loginData";

    this.loginService.login(this.userLogin).subscribe(response => {
      this.user = response;

    })

    if (this.user.token != null) {
      console.log("Hola");

      localStorage.setItem("userLogin", this.username + "");
      this.navCtrl.setRoot(WelcomePage);
    } else {
      this.message = "Clave o usuario incorrecto";
    }
  }

  envia(){
    this.navCtrl.setRoot(RegisterUserPage)
  }
}
