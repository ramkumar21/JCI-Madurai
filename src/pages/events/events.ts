import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         LoadingController, Loading} from 'ionic-angular';
import { EventsProvider } from  '../../providers/events/events.provider';
import { EventDetailPage } from '../event-detail/event-detail';



@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  public eventList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public eventProvider: EventsProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    this.eventProvider.getEventList().on('value', eventListSnapshot=>{
        this.eventList = [];
        eventListSnapshot.forEach(snap => {
          this.eventList.push({
            id: snap.key,
            eventName: snap.val().eventName,
            eventDate: snap.val().eventDate,
            eventTime: snap.val().eventTime,
            eventPlace: snap.val().eventPlace,
            });
          return false;
        });
        loading.dismiss();
    });
  }

  takeToDetailPage(eventId): void{
    this.navCtrl.push(EventDetailPage, {'eventId': eventId });
  }

  takeToDummyDetail(){
    this.navCtrl.push(EventDetailPage);
  }

}
