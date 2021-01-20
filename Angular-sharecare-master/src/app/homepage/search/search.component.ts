import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router, private _Service: BookService) { }

  ngOnInit(): void {
  }

  books: any;
  bookTitle: string;

  public getBookByTitle() {
    let resp = this._Service.getBookByTitle(this.bookTitle);
    resp.subscribe((data) => this.books = data);
  }


}
