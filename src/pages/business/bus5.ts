import { Component } from '@angular/core';

import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { CompanyPage } from './company';


@Component({
selector: 'page-bus',
  templateUrl: 'bus5.html'
})
export class Bus5Page {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public viewCtrl: ViewController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(CompanyPage, characterNum);
    modal.present();
  }
	dismiss() {
    this.viewCtrl.dismiss();
  }
}

