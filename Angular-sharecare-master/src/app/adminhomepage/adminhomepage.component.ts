import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    // if (!sessionStorage.getItem('email')) {
    //   this._router.navigate(['/login']);
    // }
  }

  onlogout() {
    sessionStorage.removeItem('id');
    this._router.navigate(['/indexpage']);
  }
}
