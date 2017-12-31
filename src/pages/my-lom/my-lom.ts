import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

/**
 * Generated class for the MyLomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-lom',
  templateUrl: 'my-lom.html',
})
export class MyLomPage {
	
	lomarea : string = "lgb";
  isAndroid: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
  this.isAndroid = platform.is('android');
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad MyLomPage');
  }

}
