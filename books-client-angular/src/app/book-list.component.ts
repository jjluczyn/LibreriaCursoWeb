import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private service: BooksService) {
    this.service.getBooks().subscribe(
           books => this.books = books
        );
  }

  ngOnInit() {

  }

}
