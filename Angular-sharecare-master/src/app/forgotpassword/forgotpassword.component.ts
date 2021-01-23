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
  isVisible: boolean = false;
  ngOnInit(): void {
  }
  user = new User();
  mailId: string;
  newpass: string;
  newpassword: string;

  onsubmit() {
    try {

      this._service.sendEmail(this.user).subscribe(data => {
        // this.router.navigate(['custrespass']);
        this.user = data;
        this.isVisible = true;
      },
        error => {
          console.log(error);
          this.isVisible = false;
        }
      );
    } catch (error) {
      this.isVisible = false;
    }
  }

  changepass() {
    try {
      this._service.getUserByEmail(this.user.email).subscribe(data => {
        this.user = data;
        //        console.log(this.user);

      }, error => { console.log(error) }
      );
    } catch (error) {
      console.log(error);
    }


  }

  updatePassword() {
    try {



      if (this.user.otp == this.user.password) {
        this.user.password = this.newpassword;
        this._service.updateUser(this.user.id, this.user).subscribe(data => {
          this._router.navigate(['/login']);

        }, error => {
          console.log(error)
        });
      } else {

      }
    } catch (error) {
      console.log(error);
    }

  }
}

