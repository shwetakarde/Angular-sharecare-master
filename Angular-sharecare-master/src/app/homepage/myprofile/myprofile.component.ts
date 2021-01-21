import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private _service: RegistrationService, private _router: Router) { }

  user = new User();
  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this._router.navigate(['/login']);
    }
    let id = parseInt(sessionStorage.getItem('id'));
    this._service.getUser(id).subscribe(user => {
      this.user = user;
    })

  }




}
