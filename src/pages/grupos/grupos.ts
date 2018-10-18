import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, List } from 'ionic-angular';
import { Group } from '../../Model/Group';
import { User } from '../../Model/User';
import { RutaPage } from '../ruta/ruta';
import { AssociatedUserPage } from '../associated-user/associated-user';
import { GroupServiceProvider } from '../../providers/group-service/group-service';

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

  group: Group = new Group()
  myGroups: Array<Group>=[]
  user: User
  associatedUser: User[] = new Array()

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private alert: AlertController, private groupservice: GroupServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposPage');
    this.loadMyGroups()



  }

  loadMyGroups() {
    this.myGroups = new Array()
    this.user = JSON.parse(localStorage.getItem("userLogin"))
    this.groupservice.getMyGroup(this.user.idusuario).subscribe(response => {
      console.log(response);
      
      /*if (response) {

        this.myGroups = response
      }
      console.log(this.myGroups);*/

    })
    /*for (let i = 0; i < 10; i++) {
      this.user = new User()
      this.user.usuario = "Test" + i

      this.user.telefono = "123" + i
      this.user.idestado = 1
      this.associatedUser.push(this.user)
    }
    for (let j = 0; j < 5; j++) {
      this.group = new Group()
      this.group.nombre = "Mi grupo de test" + j
      this.group.descripcion = "esta es la ruta " + j
      this.group.UserAssociated = this.associatedUser
      this.myGroups.push(this.group)
    }*/
  }

  details(any) {
    console.log("ok");
    const modal = this.modalCtrl.create(AssociatedUserPage, any.UserAssociated, { showBackdrop: true })
    modal.present()
  }

  addGroup() {
    let alert = this.alert.create({
      title: "Nuevo Grupo",
      inputs: [{
        name: "nombre",
        placeholder: "Ingrese Nombre"
      },
      {
        name: "descripcion",
        placeholder: "Descripción",
        type: "text"
      }],
      buttons: [
        {
          text: "Guardar",
          handler: data => {

            if (data.nombre != "" && data.descripcion != "") {
              this.group = data;
              console.log(this.group);
              this.user = JSON.parse(localStorage.getItem("userLogin"))
              this.group.UserAdmin = this.user.idusuario
              this.groupservice.saveGroup(this.group).subscribe(response => {
                console.log(response);

                
              });
              return true
            }
            return false
          }
        },
        {
          text: "Cancelar"
        }
      ]
    })
    alert.present()
  }

}
