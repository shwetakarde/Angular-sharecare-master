import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('User');
  }

  loginUser() {

    if (this.user.email == "admin@gmail.com" && this.user.password == "admin") {
      // sessionStorage.setItem('id', 'true');

      this._router.navigate(['/adminhomepage'])

    }
    else {
      this._service.loginUserFromRemote(this.user).subscribe(
        data => {
          sessionStorage.setItem('id', data.id);

          console.log(data);
          console.log("response received");

          this._router.navigate(['/homepage']);
        },
        error => {
          console.log("exception occured");
          this.msg = "Invalid Credentials,Please enter valid email id And password";
        }
      )
    }
  }



  // registration() {
  //   this._router.navigate(['/registration'])
  // }
}
