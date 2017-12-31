import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HometabPage } from '../pages/hometab/hometab';
import { MyLomPage } from '../pages/my-lom/my-lom';
import { BusinessPage } from '../pages/business/business';
import { EventsPage } from '../pages/events/events';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { CreedPage } from '../pages/creed/creed';
import { KotpaduPage } from '../pages/kotpadu/kotpadu';

import { ModalContentPage } from '../pages/about/modal-content';
import { ModalBusinessPage } from '../pages/business/modal-business';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyLomPage,
    BusinessPage,
    EventsPage,
    HelpPage,
    HometabPage,
    AboutPage,
    CreedPage,
    KotpaduPage,
    ModalContentPage,
    ModalBusinessPage,
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
    BusinessPage,
    EventsPage,
    HelpPage,
    HometabPage,
    AboutPage,
    CreedPage,
    KotpaduPage,
    ModalContentPage,
    ModalBusinessPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
