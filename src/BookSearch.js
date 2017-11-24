import React, {Component} from 'react';
import Book from './Book';
import {bookStatusDescriptionArray as status_list} from './BookTypes';

import {search} from './BooksAPI';
import "./BookSearch.css";
import "./App.css";

import type {Element} from 'react';
import type {BookInfo, BookStatus} from './BookTypes';
import type {InputEventHandler} from './BookTypes';

export type Props = {
    books: ?Array<BookInfo>,
    update: (book: BookInfo, shelf: BookStatus) => void,
    search: (query: string, max: number) => void,
};

export type State = {
    query: string,
    books: ?Array<BookInfo>,
    maxResults: number,
};

class BookSearch extends Component<Props, State> {
    state: State = {
        books: null,
        query: "",
        maxResults: 20,
    };

    find: InputEventHandler = (event: SyntheticInputEvent<HTMLInputElement>): void => {
        const {maxResults} = this.state;
        const {value: query} = event.target;
        console.log({query});        
        this.setState({query});
        this.props.search(query, maxResults);
    };

    render(): Element<'div'> {
        const {update} = this.props;
        const {query/*, books*/} = this.state;
        const {books} = this.props;        
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search">Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" value={query} onChange={this.find} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                  {books && books
                      .map((book: BookInfo): Element<typeof Book> => (
                            <Book key={book.id} book={book} update={update}/>
                      ))}
                </ol>
            </div>
          </div>
        );
    }
}

export default BookSearch;
