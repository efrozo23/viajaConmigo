import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Group } from '../../Model/Group';
import { User } from '../../Model/User';
import { RutaPage } from '../ruta/ruta';

/**
 * Generated class for the GruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  group :Group
  myGroups:Group[] = new Array()
  user :User
  associatedUser:User[] = new Array()

  constructor(public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposPage');
    this.loadMyGroups()
    console.log(this.associatedUser);
    

  }

  loadMyGroups(){
    for (let i = 0; i < 10; i++) {
      this.user = new User()
      this.user.Name= "Test"+i
      this.user.CreationDate = new Date()
      this.user.PhoneNumber = "123"+i
      this.associatedUser.push(this.user)
    }
    for (let j = 0; j < 5; j++) { 
      this.group = new Group()
      this.group.Name = "Mi grupo de test" +j
      this.group.Description = "esta es la ruta "+j
      this.group.UserAssociated = this.associatedUser
      this.myGroups.push(this.group)
    }
  }
  
  details(){
    console.log("ok");
    const modal =this.modalCtrl.create(RutaPage,this.associatedUser ,{showBackdrop:true})
    modal.present()
  }

}
