import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiderappProvider } from '../../providers/confiderapp/confiderapp';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {


  listaEventos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams
  	 , public confinderProvider: ConfiderappProvider) {
    this.initializeItems();
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

  initializeItems() {
    this.listaEventos;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listaEventos = this.listaEventos.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

  


