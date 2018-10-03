import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginModel } from '../../Model/LoginModel';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { User } from '../../Model/User';

import { WelcomePage } from '../welcome/welcome';
import { RegisterUserPage } from '../register-user/register-user';
import { RutaPage } from '../ruta/ruta';


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
   
  }
  login() {
    this.userLogin.valuesBase64 = this.username;
    this.userLogin.access = this.password;
    this.loginService.login(this.userLogin).subscribe(response => {
      console.log(response);
      
      this.user = response;
      if (this.user.Message == "") {
        localStorage.setItem("userLogin", JSON.stringify(this.user));
        this.navCtrl.setRoot(WelcomePage);
      } else {
        this.message = "Clave o usuario incorrecto";
      }
    })
  }

  envia(){
    this.navCtrl.setRoot(RegisterUserPage)
  }
  enviaRuta(){
    this.navCtrl.setRoot(RutaPage)
  }
}
