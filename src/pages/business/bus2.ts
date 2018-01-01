import { Component } from '@angular/core';

import { ModalController, NavController,Platform, NavParams, ViewController } from 'ionic-angular';
import { CompanyPage } from './company';


@Component({
  templateUrl: 'bus2.html'
})
export class Bus2Page {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public viewCtrl: ViewController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(CompanyPage, characterNum);
    modal.present();
  }
	dismiss() {
    this.viewCtrl.dismiss();
  }
}

