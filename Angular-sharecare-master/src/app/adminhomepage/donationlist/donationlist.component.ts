import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/donation';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.css']
})
export class DonationlistComponent implements OnInit {

  constructor(private _adminservice: AdminserviceService) { }

  ngOnInit(): void {
    this.getAllDonation();

  }
  alluser: any;
  donation = new Donation('', '', '', 1000);
  getAllDonation() {
    this._adminservice.getdonation().subscribe(
      (data) => {
        this.alluser = data
        console.log(this.alluser);
        console.log("response recieved");
      },
      error => {
        console.log("Exception occured");
      })
  }


}
