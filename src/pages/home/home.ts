import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

 
	ImageArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams)
   {
  this.ImageArray=[
  {'image':'../../assets/img/1.jpg'},
  {'image':'../../assets/img/2.jpg'}
  ]
 
  }}
