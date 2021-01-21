import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-innerheader',
  templateUrl: './innerheader.component.html',
  styleUrls: ['./innerheader.component.css']
})
export class InnerheaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onlogout() {
    sessionStorage.removeItem('id');
    this._router.navigate(['/indexpage']);

  }

}
