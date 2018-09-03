import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfiderappProvider } from '../../providers/confiderapp/confiderapp';
/**
 * Generated class for the ComputerconfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computerconf',
  templateUrl: 'computerconf.html',
})
export class ComputerconfPage {
	tag: string;
	listaEventos: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	 public confinderProvider: ConfiderappProvider) {
  	 this.tag = this.navParams.get('data'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.confinderProvider.getEventosComputacion()
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
