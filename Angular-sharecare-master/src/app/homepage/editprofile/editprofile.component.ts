import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id: Number;

  constructor(private _router: ActivatedRoute, private _service: RegistrationService, private _route: Router) { }

  user = new User();

  // updateform = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   contactNo: new FormControl('')
  // })



  ngOnInit(): void {
    // console.log(this._router.snapshot.params.id)

    this.getData()
  }

  getData(): any {

    try {
      this._service.getUser(this._router.snapshot.params.id).subscribe((result) => {
        this.user = result;

      }, error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }

  }

  updateUser() {
    try {

      this._service.updateUser(this._router.snapshot.params.id, this.user).subscribe((result) => {

        this._route.navigate(['/myprofile']);
      }, error => {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }

  }
}
