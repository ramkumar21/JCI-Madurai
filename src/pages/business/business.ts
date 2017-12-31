import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';
import { ModalBusinessPage } from './modal-business';

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

   openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalBusinessPage, characterNum);
    modal.present();
  }

}
