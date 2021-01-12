import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../admin';
import { Route } from '@angular/compiler/src/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new Admin();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }


  loginAdmin() {

    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => {
        // sessionStorage.setItem('userSesId', data.userSesId);
        console.log("response received");
        this._router.navigate(['/adminhomepage'])

      },
      error => {

        console.log("exception occured");
        this.msg = "Invalid  Credentials , Please enter valid email id And password";
      }
    )
  }



}
