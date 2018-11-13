import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackuserProvider } from '../../providers/backuser/backuser';




/**
 * Generated class for the UserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-data',
  templateUrl: 'user-data.html',
})
export class UserDataPage {
  private user:User
  myForm: FormGroup
  private useredit:User
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder,public userservice:BackuserProvider) {
    this.user = JSON.parse(localStorage.getItem("userLogin"));
    this.myForm = this.formbuilder.group({
      iduser:[this.user.documentoidentidad,[Validators.required]],
      username:[this.user.nombre,Validators.required],
      lastname:[this.user.apellido,Validators.required],
      nameuser:[this.user.usuario,[Validators.required]],
      email:[this.user.correo,[Validators.email,Validators.required]],
      userphone:[this.user.telefono,[Validators.required,Validators.minLength(7),Validators.maxLength(10)]],
      passwordRetry: formbuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDataPage');
  }
  edituser(){
    this.useredit = this.myForm.value
    console.log(this.useredit);
    this.userservice.edituser(this.useredit).subscribe(response=>{
      console.log(response);
      
    })

    
  }

  passwordMatchValidator(g : FormGroup){
    return (g.value.passwordRetry.password === g.value.passwordRetry.passwordConfirmation)&&(g.valid) ? 
    true : false
  }
}
