import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { InAppBrowser, InAppBrowserObject  } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  imagenes: any;

  constructor(public platform: Platform,
              private serviceProvider: ProviderServiceService, 
              private inAppBrowser: InAppBrowser, 
              private appAvailability: AppAvailability) {
                this.getImagen();
               }

  ngOnInit() {
    // this.getImagen();
  }

  getImagen() {
    this.serviceProvider.getImagenes().then( (data:any) => {
      this.imagenes = data[0].imagen;
      console.log(this.imagenes);
    });
  }  
  
}
