import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  private username: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (!localStorage.getItem("userLogin")) {
      navCtrl.setRoot(HomePage)
    }
    this.username = localStorage.getItem("userLogin");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
