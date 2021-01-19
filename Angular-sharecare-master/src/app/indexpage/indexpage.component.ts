import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactusService } from '../contactus.service'
import { Contactus } from '../contactus';
@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.css']
})
export class IndexpageComponent implements OnInit {

  constructor(private _service: ContactusService, private _router: Router) { }

  ngOnInit(): void {
  }

  contactusModel = new Contactus();

  contactus() {
    this._service.addContactus(this.contactusModel).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/indexpage'])

      },
      error => {
        console.log("exception occured");

      }

    )
  }
}
