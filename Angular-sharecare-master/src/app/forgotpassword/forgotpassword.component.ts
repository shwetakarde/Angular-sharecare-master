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

  ngOnInit(): void {
  }
  user = new User();
  mailId: string;
  newpass: string;


  onsubmit() {
    // this.mailId = sessionStorage.getItem('sid');
    this.user.email = (<HTMLInputElement>document.getElementById('email')).value;
    console.log(this.user.email);


    this._service.sendEmail(this.user).subscribe(data => {
      // this.router.navigate(['custrespass']);
      this.user = data;
    },
      error => console.log(error)
    );
  }

  changepass() {

    let opass = (<HTMLInputElement>document.getElementById('password')).value;
    this.newpass = (<HTMLInputElement>document.getElementById('newpass')).value;
    // this.mailId = sessionStorage.getItem('sid');
    this._service.getUserByEmail(this.user.email).subscribe(data => {
      this.user = data;
      console.log("after obj " + this.user.firstName);

      if (opass === this.user.password) {
        console.log("pass matched==================" + this.user.password);
        this.user.password = this.newpass;

        this._service.updateUser(this.user.id, this.user).subscribe(data => {

          this._router.navigate(['/login']);
        }, error => console.log(error));
      }

    }, error => console.log(error)
    );

  }
}

