import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  baseurl = "http://localhost:8081/";

  public getAllBook(): Observable<any> {
    return this._http.get(this.baseurl + "booklist");
  }

  public uploadBook(book: Book): Observable<any> {
    return this._http.post<any>(this.baseurl + "addBook", book)
  }


  public getBookByTitle(bookTitle) {
    return this._http.get(this.baseurl + "getBook/" + bookTitle);
  }


  getBookById(bookId: Number): Observable<Book> {
    return this._http.get<Book>(this.baseurl + "books/" + bookId);
  }
}
