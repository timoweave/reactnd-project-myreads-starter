import React from 'react';
import Book from './Book';
import './BookList.css';

import type {Element} from 'react';
import type {BookInfo, BookStatus} from './BookTypes';

export type Props = {
    +shelf: BookStatus,
    +title: string,
    +books: ?Array<BookInfo>,
    update: (book: BookInfo, shelf: BookStatus) => void,
};

export type State = {
};

class BookList extends React.Component<Props, State> {
    render(): Element<'div'> {
        const {books, title, shelf, update} = this.props;

        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books && books
                      .filter((book: BookInfo): boolean => book.shelf === shelf)
                      .map((book: BookInfo): Element<typeof Book> => (
                            <Book key={book.id} book={book} update={update}/>
                      ))}
                </ol>
              </div>
            </div>
        );
    }
}

export default BookList
