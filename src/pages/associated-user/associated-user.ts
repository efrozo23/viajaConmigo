import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';

/**
 * Generated class for the AssociatedUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-associated-user',
  templateUrl: 'associated-user.html',
})
export class AssociatedUserPage {

  listUser: User[] = new Array()
  user: User

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listUser = navParams.data
    
    
  }

  ionViewDidLoad() {
    console.log('Creo la lista de usuarios');
    
    
  }

  closeModal() {
    this.navCtrl.pop();
  }

  setLevel($event, any){
    console.log($event, any);
    
  }

}
