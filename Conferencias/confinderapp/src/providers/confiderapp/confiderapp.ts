import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ConfiderappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfiderappProvider {



private url = 'http://localhost:8000/';
private usuario: any[] = [];
private curso: any[] =[];
private token: any[] = [];

    constructor(public http: HttpClient,
                public alertCtrl: AlertController,) {
        console.log('Hello CenecuProvider Provider');
        console.log(this.url);
    }
    getEventos () {
     return this.http.get<any>(this.url+'eventos/');
    }

    getEventosComputacion() {
    	return this.http.get<any>(this.url+'eventos/tag/computer');
    }

    getEventosCercanos() {
      return this.http.get<any>(this.url+'eventos/cercanos');
    }

}