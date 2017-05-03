import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

  book: Book = {title: "", description: ""};

  constructor(private router: Router, private service: BooksService) {
  }

  ngOnInit() {
  }

  addBook(){
    this.service.addBook(this.book).subscribe(
      response => this.router.navigate(['/books'])
    );
  }
}
