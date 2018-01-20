import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';
// import { CallNumber } from '@ionic-native/call-number';
// import { EmailComposer } from '@ionic-native/email-composer';

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
        <ion-item (click)="call(item.contact)">{{item.contact}}</ion-item>
        <ion-item (click)="sendEmail(item.email)">{{item.email}}</ion-item>
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
    public viewCtrl: ViewController,
    // private emailComposer: EmailComposer, 
    // private callNumber: CallNumber
  ) {
    var characters = [
      {
        name: 'Gollum',
        items: [
          { company: 'Asser',
            name: 'RajKiran', 
            profession: 'Owner',
            industrytype: 'Building and Construction',
            contact: '+91-9566709817',
            email: 'info@gmail.com',
            description: 'Electrical Jobs',
             },
        ]
      },
      {
        name: 'Hare',
        items: [
          { title: 'RajKiran', 
            profession: 'Owner',
            industrytype: 'Building and Construction',
            contact: '+91-9566709924',
            email: 'info@gmail.com',
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

  call(a){
 setTimeout(() => {
      let tel = a;
      window.open(`tel:${tel}`, '_system');
    },100);
  }



  sendEmail(b){
  let mailto = b;
  window.open(`mailto:${mailto}`, '_system');
  }
}