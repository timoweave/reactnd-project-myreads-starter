import React, {Component} from 'react';
import {bookStatusDescriptionArray as status_list} from './BookTypes';
import {update} from './BooksAPI';
import "./BookSearch.css";

import type {Element} from 'react';
import type {BookInfo, BookStatusDescription as Status} from './BookTypes';

export type Props = {
    // book: BookInfo,
};

export type State = {
    query: string,
};

class BookSearch extends Component<Props, State> {
    render(): Element<'div'> {
        return (
            <div>
                search book
            </div>
        );
    }
}

export default BookSearch;
