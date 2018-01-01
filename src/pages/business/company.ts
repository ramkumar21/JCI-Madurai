import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Bus1Page } from './bus1';
import { Bus2Page } from './bus2';
import { Bus3Page } from './bus3';
import { Bus4Page } from './bus4';
import { Bus5Page } from './bus5';
import { Bus6Page } from './bus6';
import { Bus7Page } from './bus7';
import { Bus8Page } from './bus8';

@Component({
  template:  `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Company Details
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
        <h2 style="text-align:center;font-weight:800" text-uppercase>{{item.company}}</h2>
        <ion-item>{{item.name}}</ion-item>
        <ion-item>{{item.profession}}</ion-item>
        <ion-item>{{item.industrytype}}</ion-item>
        <ion-item>{{item.contact}}</ion-item>
        <ion-item>{{item.description}}</ion-item>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class CompanyPage {
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
          { company: 'Asser',
            name: 'RajKiran', 
            profession: 'Owner',
            industrytype: 'Building and COnstruction',
            contact: '+91-9876543210',
            description: 'Electrical Jobs',
             },
        ]
      },
      {
        name: 'Hare',
        items: [
          { title: 'RajKiran', 
            profession: 'Owner',
            industrytype: 'Building and COnstruction',
            contact: '+91-9876543210',
            description: 'Electrical Jobs',
             },
        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}