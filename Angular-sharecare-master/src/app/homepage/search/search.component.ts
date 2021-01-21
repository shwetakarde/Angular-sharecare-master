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
    if (!sessionStorage.getItem('id')) {
      this._router.navigate(['/login']);
    }
  }

  books: any;
  bookTitle: string;

  public getBookByTitle() {
    this._Service.getBookByTitle(this.bookTitle).subscribe((data) => this.books = data);
  }


}
