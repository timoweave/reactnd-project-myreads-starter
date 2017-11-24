import React from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import './BookList.css'

import type {Element} from 'react';
import type {BookItem, BookStatus,} from './BookTypes';

export type Props = {
    +shelf: BookStatus,    
    +title: string,
    +books: ?Array<BookItem>,
};

export type State = {
};

class BookList extends React.Component<Props, State> {
    render(): Element<'div'> {
        const {books, title, shelf} = this.props;
        console.log({shelf, title, books});
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books && books
                     .filter((book: BookItem): boolean => book.shelf === shelf)
                     .map((book: BookItem): Element<typeof Book> => (
                        <Book key={book.id} book={book}/>
                    ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookList