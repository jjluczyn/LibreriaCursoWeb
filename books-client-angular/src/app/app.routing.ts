import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form.component';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';

const appRoutes = [
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'bookedit/:id', component: BookEditComponent,  },
  { path: 'bookadd', component: BookFormComponent, },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
