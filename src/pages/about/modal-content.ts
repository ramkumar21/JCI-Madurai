import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modalcon',
  template:  `
<ion-header>
  <ion-toolbar>
    <ion-title>
      About
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      
      <ion-item *ngFor="let item of character['items']">
        <h2 style="text-align:center;font-weight:800" text-uppercase>{{item.title}}</h2>
        <ion-card><ion-card-content><ion-note>{{item.note}}</ion-note></ion-card-content></ion-card>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        items: [
          { title: 'Vision', 
            note: 'To be the leading global network of Young Active Citizens.' },
          { title: 'Mission', note: 'To Provide Development Opportunities that empowers young people to create positive change.' },
          { title: 'Founder’s Perspective', note: 'From within the walls of the soul of this organisation, wherein the foundation of character and good citizenship are laid, I hope a message will come in the sometime of tomorrow that will stir the people towards the establishment of a permanent and ever lasting world peace.' }
        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}