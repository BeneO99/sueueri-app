import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}


  async popupParticipant(){
    //hier array/Liste bauen mit allen Teilnehmern aus Backend


    const alert = await this.alertController.create({
      header: 'Teilnehmer',
      subHeader: '',
      message: 'Bene \n Lukas \n Roho', //Liste einfügen
      buttons: ['OK'],
    });

    await alert.present();
  }

}
