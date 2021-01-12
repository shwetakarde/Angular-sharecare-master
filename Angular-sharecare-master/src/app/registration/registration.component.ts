import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  msg = ''
  user = new User();
  constructor() { }

  ngOnInit(): void {
  }


  registerNow() {

  }
}
