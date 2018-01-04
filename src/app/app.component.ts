import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";
import { FIREBASE_CONFIG } from './app.firebase.config';

import { HometabPage } from '../pages/hometab/hometab';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { EventsPage } from '../pages/events/events';
import { HelpPage } from '../pages/help/help';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HometabPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    firebase.initializeApp(FIREBASE_CONFIG);
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HometabPage },
      { title: 'MyLom', component: MyLomPage },
      { title: 'Events', component: EventsPage },
      { title: 'Help', component: HelpPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
