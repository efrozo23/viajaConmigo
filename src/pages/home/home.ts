import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginModel } from '../../Model/LoginModel';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { User } from '../../Model/User';

import { WelcomePage } from '../welcome/welcome';
import { RegisterUserPage } from '../register-user/register-user';
import { RutaPage } from '../ruta/ruta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LoginServiceProvider]
})
export class HomePage {

  
  private message: String = "";
  private userLogin: LoginModel = new LoginModel();
  private user: User = new User();
  private form:FormGroup

  constructor(public navCtrl: NavController, public loginService: LoginServiceProvider,public formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]  
    })
    if (!localStorage.getItem("userLogin")) {
      console.log("Ingreso");
      
    } else {
      navCtrl.setRoot(WelcomePage)
    }
  }
  login() {
    console.log(this.form.value);
    
    this.userLogin = this.form.value;
    
    this.user.Name ="Elkin"
    this.user.PasswordKey = "123456"
    this.user.CreationDate = new Date()
    this.user.Message == "hola"
    this.user.Id =1056030632
    this.user.IdDevice = "3023253439"
    /*this.loginService.login(this.userLogin).subscribe(response => {
      console.log(response);
      
      this.user = response;
     
    })*/

    if (this.user.Message != "") {
      localStorage.setItem("userLogin", JSON.stringify(this.user));
      this.navCtrl.setRoot(WelcomePage);
    } else {
      this.message = "Clave o usuario incorrecto";
    }
  }

  envia(){
    this.navCtrl.setRoot(RegisterUserPage)
  }
  enviaRuta(){
    this.navCtrl.setRoot(RutaPage)
  }
}
