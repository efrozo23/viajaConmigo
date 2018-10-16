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
  private message :String = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public backuser: BackuserProvider) {
    this.myForm = formBuilder.group({
      document:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      name: ['', Validators.required],
      surnames:['',Validators.required],
      email: ['', Validators.required],
      username:['',[Validators.required,Validators.maxLength(20)]],
      phone :['',[Validators.required,Validators.minLength(7),Validators.maxLength(12)]],
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
    this.user = this.myForm.value;
    console.log(this.user);
    
    this.backuser.saveuser(this.user).subscribe(response =>{
      console.log(response);
      this.message = response
    });
  }

  passwordMatchValidator(g : FormGroup){
    return (g.value.passwordRetry.password === g.value.passwordRetry.passwordConfirmation)&&(g.valid) ? 
    true : false
  }
 

  back(){
    this.navCtrl.setRoot(HomePage);
  }

}
