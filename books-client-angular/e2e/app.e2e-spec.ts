import { BooksClientAngularPage } from './app.po';

describe('books-client-angular App', () => {
  let page: BooksClientAngularPage;

  beforeEach(() => {
    page = new BooksClientAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
