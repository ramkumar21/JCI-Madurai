import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';
import { Bus1Page } from './bus1';
import { Bus2Page } from './bus2';
import { Bus3Page } from './bus3';
import { Bus4Page } from './bus4';
import { Bus5Page } from './bus5';
import { Bus6Page } from './bus6';
import { Bus7Page } from './bus7';
import { Bus8Page } from './bus8';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController ) {
  }

   segueToBus1Page(){
  this.navCtrl.push(Bus1Page);
  }
  segueToBus2Page(){
  this.navCtrl.push(Bus2Page);
  }
  segueToBus3Page(){
  this.navCtrl.push(Bus3Page);
  }
  segueToBus4Page(){
  this.navCtrl.push(Bus4Page);
  }
  segueToBus5Page(){
  this.navCtrl.push(Bus5Page);
  }
  segueToBus6Page(){
  this.navCtrl.push(Bus6Page);
  }
  segueToBus7Page(){
  this.navCtrl.push(Bus7Page);
  }
  segueToBus8Page(){
  this.navCtrl.push(Bus8Page);
  }


}
