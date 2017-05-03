import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BooksService } from "app/books.service";
import { Book } from "app/book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {

  public book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute,private service: BooksService) {
    const id = activatedRoute.snapshot.params['id'];
    this.service.getBook(id).subscribe(
      result => this.book = result
    );
  }

  ngOnInit() {
  }

  deleteBook(){
    if(confirm("Are you sure you want to delete:\n"+this.book.title)){
      this.service.removeBook(this.book).subscribe(
        response => this.router.navigate(['/books'])
      );
    }
  }

}
