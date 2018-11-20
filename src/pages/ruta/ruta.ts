import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

/**
 * Generated class for the RutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-ruta',
  templateUrl: 'ruta.html',
})
export class RutaPage {
  private map;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private  geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutaPage');
    this.getPosition()
  }

  getPosition(){
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
      console.log(response);
      
    })
    .catch(error =>{
      console.log("Error del mapa",error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }
}
