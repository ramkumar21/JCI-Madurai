import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLomPage } from './my-lom';

@NgModule({
  declarations: [
    MyLomPage,
  ],
  imports: [
    IonicPageModule.forChild(MyLomPage),
  ],
})
export class MyLomPageModule {}
