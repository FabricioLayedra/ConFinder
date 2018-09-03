import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiderappProvider } from '../../providers/confiderapp/confiderapp';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  listaEventos: any[] = [];	
  constructor(public navCtrl: NavController, public navParams: NavParams
  	,public confinderProvider: ConfiderappProvider) {
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.confinderProvider.getEventos()
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

  doRefresh(refresher) {
    console.log('Empieza async', refresher);
     this.confinderProvider.getEventos()
    .subscribe(
      (data) => { // Success
        this.listaEventos = data;
        console.log (data);
      },
      (error) =>{
        console.error(error);
      }
    )
    setTimeout(() => {
      console.log('Temina async');
      refresher.complete();
    }, 2000);
  }


}
