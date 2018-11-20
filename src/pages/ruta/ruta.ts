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
  private directionsService = new google.maps.DirectionsService();
  private directionsDisplay: any;
  private star: any;
  private end: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation) {
    this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutaPage');


    this.getPosition()
  }

  getPosition() {
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
      console.log(response);

    })
      .catch(error => {
        console.log("Error del mapa", error);
      })
  }

  loadMap(position: Geoposition) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = { lat: latitude, lng: longitude };

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    this.directionsDisplay.setMap(this.map);
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });

    });
    console.log("Valor del mapa", this.map);
    console.log("Valor del dos", this.directionsDisplay);

  }


  /**
   *This  Method is calculate route 
   */
  calculateAndDisplayRoute() {
    console.log("Datos de ingreso ", this.star + " mas " + this.end);

    this.directionsService.route({
      origin: this.star,
      destination: this.end,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response)
        console.log(response);
        console.log(this.directionsDisplay);

      } else {
        console.log("Error al cargar ", status);

      }
    })
  }
}
