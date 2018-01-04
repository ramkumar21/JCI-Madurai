import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

	url:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser, private emailComposer: EmailComposer, private callNumber: CallNumber) { }

  call(){
 setTimeout(() => {
      let tel = '8015005001';
      window.open(`tel:${tel}`, '_system');
    },100);
  }



  sendEmail(){
  let mailto ='info@geomeoinformatics.com';
  window.open(`mailto:${mailto}`, '_system');
  }

  openWebpage(url:string){
  const browser = this.inAppBrowser.create('http://www.geomeoinformatics.com','_system');
  }


}
