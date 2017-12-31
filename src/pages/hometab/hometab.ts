import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import { AboutPage } from '../about/about';

/**
 * Generated class for the HometabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html'
})
export class HometabPage {

  homeRoot = HomePage;
  eventsRoot = EventsPage;
  aboutRoot = AboutPage;


  constructor(public navCtrl: NavController) {}

}
