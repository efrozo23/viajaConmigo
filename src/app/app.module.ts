import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterUserPage } from '../pages/register-user/register-user';
import { GruposPage } from '../pages/grupos/grupos';
import { RutaPage } from '../pages/ruta/ruta';
import { BackuserProvider } from '../providers/backuser/backuser';
import { AssociatedUserPage } from '../pages/associated-user/associated-user';
import { UserDataPage } from '../pages/user-data/user-data';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { AllgroupsPage } from '../pages/allgroups/allgroups';

import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    RutaPage,
    RegisterUserPage,
    GruposPage,
    AssociatedUserPage,
    UserDataPage,
    AllgroupsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    RegisterUserPage,
    GruposPage,
    RutaPage,
    AssociatedUserPage,
    UserDataPage,
    AllgroupsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider,
    BackuserProvider,
    GroupServiceProvider,
    Geolocation
  ]
})
export class AppModule { }
