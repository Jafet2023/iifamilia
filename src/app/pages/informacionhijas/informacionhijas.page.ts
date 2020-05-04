import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacionhijas',
  templateUrl: './informacionhijas.page.html',
  styleUrls: ['./informacionhijas.page.scss'],
})
export class InformacionhijasPage implements OnInit {

  information: any;

  isLoading = true;

  constructor(private serviceProvider: ProviderServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceProvider.getDetailsIglesiashijas(id).subscribe(result => {
      console.log('details:', result);
      this.information = result;
    });
  }

}
