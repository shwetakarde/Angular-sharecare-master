import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { AddressService } from 'src/app/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private _router: Router, private _service: AddressService) { }
  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this._router.navigate(['/login']);
    }
  }
  address = new Address();

  addAddress() {
    this._service.addAddress(this.address).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/final'])

      },
      error => {
        console.log("exception occured");

      }

    )

  }
}

