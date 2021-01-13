import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  title = 'User List';

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

}
