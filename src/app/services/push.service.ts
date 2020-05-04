import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    {
      title: 'Titulo del push',
      body: 'Este es el body del push',
      date: new Date()
    }
  ];

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {
    this.oneSignal.startInit('ee3c7cde-91b5-4705-9597-877006a0e04e', '542697747386');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
    });

    this.oneSignal.endInit();
  }
}
