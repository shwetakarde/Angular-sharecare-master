import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/contactus.service';
import { Donation } from 'src/app/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private _service: ContactusService, private _router: Router) { }

  ngOnInit(): void {
  }
  paymentmode = ['Net Banking', 'Debit Card', 'Credit Card'];
  donation = new Donation('', '', '', 1000);

  addDonate() {
    this._service.addDonate(this.donation).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/thankyou'])

      },
      error => {
        console.log("exception occured");

      }

    )

  }
}
