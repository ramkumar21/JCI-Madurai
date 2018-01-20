import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';

//components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HometabPage } from '../pages/hometab/hometab';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { CreedPage } from '../pages/creed/creed';
import { KotpaduPage } from '../pages/kotpadu/kotpadu';
import { ModalContentPage } from '../pages/about/modal-content';
import { EventsPage } from '../pages/events/events';
import { EventDetailPage} from '../pages/event-detail/event-detail';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { EventsProvider } from '../providers/events/events.provider';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyLomPage,
    EventsPage,
    HelpPage,
    HometabPage,
    AboutPage,
    CreedPage,
    KotpaduPage,
    ModalContentPage,
    EventDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicImageViewerModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyLomPage,
    EventsPage,
    HelpPage,
    HometabPage,
    AboutPage,
    CreedPage,
    KotpaduPage,
    ModalContentPage,   
    EventDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    CallNumber,
    EmailComposer,
    EventsProvider
  ]
})
export class AppModule {}
