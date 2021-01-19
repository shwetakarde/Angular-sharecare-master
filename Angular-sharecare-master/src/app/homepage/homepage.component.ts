import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _Service: BookService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  book = new Book();
  public allbook;

  getAllBook() {
    this._Service.getAllBook().subscribe(
      (data) => {
        this.allbook = data
        console.log(this.allbook);
        console.log("response recieved");
      },
      error => {
        console.log("Exception occured");
      })

  }
}
