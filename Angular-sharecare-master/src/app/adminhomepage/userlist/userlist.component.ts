import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  title = 'User List';
  user = new User();
  public alluser;
  message = "User deleted successfully";
  constructor(private _adminservice: AdminserviceService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllUser();

  }

  getAllUser() {
    this._adminservice.getuser().subscribe(
      (data) => {
        this.alluser = data
        console.log(this.alluser);
        console.log("response recieved");
      },
      error => {
        console.log("Exception occured");
      })
  }

  deleteUser(id: Number): void {

    this._adminservice.deleteUser(id).subscribe(data => {
      console.log(data);

    })
    this.getAllUser();
  }

}
