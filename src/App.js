import React from 'react';
import Book from './Book';
import BookList from './BookList';
import {getAll} from './BooksAPI';
import {Move, CurrentlyReading, WantToRead, DoneReading} from './BookTypes';
import './App.css';

import type {BookItem} from './BookTypes';

export type Props = {
};

export type State = {
    books: ?Array<BookItem>,
};

class BooksApp extends React.Component<Props, State> {
    state = {
        books: null,
    }

    componentDidMount(): void {
        getAll().then((books: Array<BookItem>) => {
            this.setState({books});
        });
    }

    render() {
        const {books} = this.state;
        if (books === null) { return null; }

        return (
            <div className="app">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <BookList shelf={CurrentlyReading} title="Currently Reading" books={books}/>
                  <BookList shelf={WantToRead} title="Want to Read" books={books}/>
                  <BookList shelf={DoneReading} title="Read" books={books}/>
                </div>
                <div className="open-search">
                  <a onClick={() => console.log("add a book")}>Add a book</a>
                </div>
              </div>
            </div>
        );
    }
}

export default BooksApp
