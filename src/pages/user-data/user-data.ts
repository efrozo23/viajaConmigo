import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {
    this.user = JSON.parse(localStorage.getItem("userLogin"));
    this.myForm = this.formbuilder.group({
      username:[this.user.nombre,Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDataPage');
    
   
  }

}
