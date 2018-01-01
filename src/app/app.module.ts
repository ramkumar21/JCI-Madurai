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
import { Bus1Page } from '../pages/business/bus1';
import { Bus2Page } from '../pages/business/bus2';
import { Bus3Page } from '../pages/business/bus3';
import { Bus4Page } from '../pages/business/bus4';
import { Bus5Page } from '../pages/business/bus5';
import { Bus6Page } from '../pages/business/bus6';
import { Bus7Page } from '../pages/business/bus7';
import { Bus8Page } from '../pages/business/bus8';
import { CompanyPage } from '../pages/business/company';

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
    Bus1Page,
    Bus2Page,
    Bus3Page,
    Bus4Page,
    Bus5Page,
    Bus6Page,
    Bus7Page,
    Bus8Page,
    CompanyPage,
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
    Bus1Page,
    Bus2Page,
    Bus3Page,
    Bus4Page,
    Bus5Page,
    Bus6Page,
    Bus7Page,
    Bus8Page,
    CompanyPage,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
