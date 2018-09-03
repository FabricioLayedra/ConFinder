import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProximosPage } from './proximos';

@NgModule({
  declarations: [
    ProximosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProximosPage),
  ],
})
export class ProximosPageModule {}
