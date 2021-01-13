import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  title = 'User List';
  user = new User();
  public alluser;
  constructor(private _adminservice: AdminserviceService) { }

  ngOnInit(): void {

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

  reloadData() {
    this.alluser = this._adminservice.getuser();
  }

  deleteUser(id: Number) {
    this._adminservice.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      error => {
        console.log(error);
      }
    )
  }

}
