import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Cart } from '../cart';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _Service: BookService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('id')) {
      this._router.navigate(['/login']);
    }
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


  books: any;
  bookTitle: string;

  public getBookByTitle() {
    this._Service.getBookByTitle(this.bookTitle).subscribe((data) => this.allbook = data);
  }


  addDetails(bookId: number) {
    this._router.navigate(['cart', bookId]);
  }



  // addToCart(book: Book) {
  //   let cart = new Cart();
  //   cart.bookId = book.bookId;
  //   cart.id = parseInt(sessionStorage.getItem('id'));
  //   cart.bookTitle = book.bookTitle;
  //   cart.bookAuthor=book.
  //   this._Service.addToCart(cart).subscribe(data => {
  //     console.log(data);
  //   })
  // }


}
