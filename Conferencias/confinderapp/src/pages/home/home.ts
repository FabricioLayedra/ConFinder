import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComputerconfPage } from '../computerconf/computerconf';
import { ConfiderappProvider } from '../../providers/confiderapp/confiderapp';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaEventos: any[] = [];
  constructor(public navCtrl: NavController, 
  	 public confinderProvider: ConfiderappProvider) {

  }

  irAComputacion(tag: string): void {
     this.navCtrl.push(ComputerconfPage, {
        data: tag
      });
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
