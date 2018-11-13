import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../Model/User';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  
  private user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

    if (!localStorage.getItem("userLogin")) {
      console.log("Ingreso  ");
      
      this.navCtrl.setRoot(HomePage)
    } else {
      this.user = JSON.parse(localStorage.getItem("userLogin"));


    }
    console.log('ionViewDidLoad WelcomePage',this.user);
  }

}
