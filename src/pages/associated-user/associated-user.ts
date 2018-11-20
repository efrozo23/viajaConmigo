import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';
import { GroupServiceProvider } from '../../providers/group-service/group-service';
import { Group } from '../../Model/Group';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private groupService: GroupServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('Creo la lista de usuarios');
    console.log("Datos de envio ", this.navParams.data);

    this.groupService.listUserByGroup(this.navParams.data.idgrupo).subscribe(r => {
      if (r != false) {
          this.listUser = r;        
      }
      console.log(this.listUser.length);
      
    })
  }

  closeModal() {
    this.navCtrl.pop();
  }

  setLevel($event, any) {

  }

}
