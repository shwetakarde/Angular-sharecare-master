import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _Service: BookService, private _router: ActivatedRoute, private _route: Router) { }

  book = new Book();
  bookId: any;

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this._route.navigate(['/login']);
    }

    this.bookId = this._router.snapshot.params['bookId'];

    this.book = new Book();
    this._Service.getBookById(this.bookId).subscribe(data => {
      this.book = data;
    })

  }


}
