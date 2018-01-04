import { Component } from '@angular/core';

import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ModalContentPage } from './modal-content';
import { CreedPage } from '../creed/creed';
import { KotpaduPage } from '../kotpadu/kotpadu';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
   segueToCreedPage(){
  this.navCtrl.push(CreedPage);
  }
  segueToKotpaduPage(){
  this.navCtrl.push(KotpaduPage);
  }
}

