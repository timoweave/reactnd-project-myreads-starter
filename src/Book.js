import React, {Component} from 'react';
import {bookStatusDescriptionArray} from './BookTypes';
import "./Book.css";

import type {Element} from 'react';
import type {BookItem, BookStatusDescription} from './BookTypes';

export type Props = {
    book: BookItem,
};

export type State = {
    status: Array<BookStatusDescription>,
};

class Book extends Component<Props, State> {
    state = {
        status: bookStatusDescriptionArray,
    };
    
    render(): Element<'div'> {
        const {status} = this.state;
        const {title, authors, imageLinks} = this.props.book;
        const img = {
            backgroundImage: `url(${imageLinks.smallThumbnail})`,
        };
        // console.log({title, authors, imageLinks, img});
        return (
                <div className="book">
                    <div className="book_top">
                         <div className="book_cover" style={img}></div>
                         <div className="book_shelf_changer">
                              <select>
                              {status.map((opt: BookStatusDescription): Element<'option'> => (
                                      <option key={opt.value} value={opt.value}>
                                          {opt.description}
                                      </option>
                              ))}
                              </select>
                         </div>
                    </div>
                    <div className="book_title">{title}</div>
                    <div className="book_authors">{authors}</div>
                </div>
        );
    }
}

export default Book;
