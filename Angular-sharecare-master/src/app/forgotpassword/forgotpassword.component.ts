import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }

  msg = '';
  user = new User();
  ngOnInit(): void {
  }

  sendMailUser() {
    console.log(this.user);
    this._service.sendResetEmail(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/reset-pass-mail'])
      },
      error => {
        console.log("Exception occured");
        this.msg = 'Email id is not valid';
      });
  }
}
