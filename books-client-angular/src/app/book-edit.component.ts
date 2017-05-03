import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BooksService } from "app/books.service";
import { Book } from "app/book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {

  public book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute,private service: BooksService) {
    const id = activatedRoute.snapshot.params['id'];
    this.service.getBook(id).subscribe(
      result => this.book = result
    );
  }

  ngOnInit() {
  }

  editBook(){
    this.service.updateBook(this.book).subscribe(
      response => this.router.navigate(['/book',this.book.id])
    );
  }
}
