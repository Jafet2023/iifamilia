import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ministerios',
  templateUrl: './ministerios.page.html',
  styleUrls: ['./ministerios.page.scss'],
})
export class MinisteriosPage implements OnInit {

  empresas: any;

  constructor(private serviceProvider: ProviderServiceService, public navCtrl: NavController) { }

  ngOnInit() {
    this.serviceProvider.getMinisterios().then(data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }

}
