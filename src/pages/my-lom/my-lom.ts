import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

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


  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform,  private emailComposer: EmailComposer, private callNumber: CallNumber) {
  this.isAndroid = platform.is('android');
  }

call(a){
 setTimeout(() => {
      let tel = a ;
      window.open(`tel:${tel}`, '_system');
    },100);
  }

sendEmail(b){
  let mailto = b;
  window.open(`mailto:${mailto}`, '_system');
  }


}
