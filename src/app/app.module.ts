import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HometabPage } from '../pages/hometab/hometab';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { EventsPage } from '../pages/events/events';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { CreedPage } from '../pages/creed/creed';
import { KotpaduPage } from '../pages/kotpadu/kotpadu';

import { ModalContentPage } from '../pages/about/modal-content';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    CallNumber,
    EmailComposer,
  ]
})
export class AppModule {}
