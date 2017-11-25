import React from 'react';
import {Link} from 'react-router-dom';
import BookList from './BookList';
import {CurrentRead, WantToRead, AlreadyRead} from './BookTypes';
import './App.css';

import type {BookInfo, BookStatus} from './BookTypes';

export type Props = {
    +books: ?Array<BookInfo>,
    +update: (book: BookInfo, shelf: BookStatus) => void,
};

export type State = {
};

class BookShelves extends React.Component<Props, State> {
    render() {
        const {books, update} = this.props;
        if (books === null) { return null; }
        return (
            <div className="app">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <BookList shelf={CurrentRead} title="Currently Reading" books={books} update={update}/>
                  <BookList shelf={WantToRead} title="Want to Read" books={books} update={update}/>
                  <BookList shelf={AlreadyRead} title="Already Read" books={books} update={update}/>
                </div>
                <div className="open-search">
                  <Link to="/search"/>
                </div>
              </div>
            </div>
        );
    }
}

export default BookShelves
