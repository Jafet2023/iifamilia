import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from 'src/app/services/provider-service.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  staff: any;

  constructor(private serviceProvider: ProviderServiceService) { }

  ngOnInit() {
    this.serviceProvider.getStaff().then(data => {
      this.staff = data;
      console.log(this.staff);
    });
  }

}
