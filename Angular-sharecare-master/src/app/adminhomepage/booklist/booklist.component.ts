import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private _Service: BookService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // if (!sessionStorage.getItem('id')) {
    //   this._router.navigate(['/login']);
    // }
    this.getAllBook();
  }

  book = new Book();
  public allbook;
  getAllBook() {
    this._Service.getAllAdminBook().subscribe(
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

  approveBook(id, book) {
    this._Service.approveBookById(id).subscribe(data => {
      console.log(data);
    })
    location.reload();
  }

}
