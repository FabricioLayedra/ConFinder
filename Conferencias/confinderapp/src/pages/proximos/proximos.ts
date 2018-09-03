import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiderappProvider } from '../../providers/confiderapp/confiderapp';

/**
 * Generated class for the ProximosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proximos',
  templateUrl: 'proximos.html',
})
export class ProximosPage {
  
  listaEventos: any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams
  	, public confinderProvider: ConfiderappProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.confinderProvider.getEventosCercanos()
    .subscribe(
      (data) => { // Success
        this.listaEventos = data;
        console.log (data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

 



}
