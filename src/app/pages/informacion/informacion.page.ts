import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProviderServiceService } from 'src/app/services/provider-service.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  information: any ;

  trustedVideoUrl: SafeResourceUrl;

  constructor(private serviceProvider: ProviderServiceService, private route: ActivatedRoute, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getIdMinisterio();
  }

  getIdMinisterio() {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceProvider.getDetailsMinisterio(id).subscribe(result => {
      console.log('detalles:', result);
      this.information = result;
    });
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.information.url);
  }
}
