import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iglesiashijas',
  templateUrl: './iglesiashijas.page.html',
  styleUrls: ['./iglesiashijas.page.scss'],
})
export class IglesiashijasPage implements OnInit {

  empresas: any;

  constructor(private serviceProvider: ProviderServiceService, public navCtrl: NavController) { }

  ngOnInit() {
    this.serviceProvider.getIglesiashijas().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }

}
