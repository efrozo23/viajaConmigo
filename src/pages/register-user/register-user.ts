import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HomePage } from '../home/home';
import {RegistryModel} from '../../Model/RegistryModel';
import { BackuserProvider } from '../../providers/backuser/backuser';

/**
 * Generated class for the RegisterUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {

  private user: RegistryModel;
  myForm: FormGroup ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public backuser: BackuserProvider) {
    this.myForm = formBuilder.group({
      name: ['', Validators.required],
      surnames:['',Validators.required],
      email: ['', Validators.required],
      phone :['',[Validators.required,Validators.minLength(7)]],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      })
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterUserPage');
    
  }

  saveUser(){
    console.log(this.myForm.value);
    this.user = this.myForm.value;
    //console.log(this.user);
    this.backuser.saveuser(this.user).subscribe(response =>{
      console.log(response);
    });
  }

  passwordMatchValidator(g : FormGroup){
    return g.value.passwordRetry.password === g.value.passwordRetry.passwordConfirmation ? 
    true : false
  }

  back(){
    this.navCtrl.setRoot(HomePage);
  }

}
