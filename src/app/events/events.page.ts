import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
  }


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
