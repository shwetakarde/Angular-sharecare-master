import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-uploadbook',
  templateUrl: './uploadbook.component.html',
  styleUrls: ['./uploadbook.component.css']
})
export class UploadbookComponent implements OnInit {

  constructor(private _Service: BookService, private _router: Router) { }

  ngOnInit(): void {
  }

  book = new Book();
  Category = ['Fictional', 'Non-Fictional', 'Programming', 'Comic'];

  uploadBook() {

    this._Service.uploadBook(this.book).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/homepage'])

      },
      error => {
        console.log("exception occured");

      }

    )
  }
}
