import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GruposPage } from '../pages/grupos/grupos';

import { UserDataPage } from '../pages/user-data/user-data';
import { AllgroupsPage } from '../pages/allgroups/allgroups';
import { RutaPage } from '../pages/ruta/ruta';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  grupo(){
    console.log("Envia"); 
    
    this.nav.push(GruposPage) 
  }
  allgroups(){
    this.nav.push(AllgroupsPage)
  }
  logOut(){
    localStorage.clear()
    this.nav.push(HomePage)
  }
  goUser(){
    this.nav.push(UserDataPage)
  }
  myroute(){
    this.nav.push(RutaPage)
  }
}

