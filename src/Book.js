import React, {Component} from 'react';
import {bookStatusDescriptionArray as status_list} from './BookTypes';
import "./Book.css";

import type {Element} from 'react';
import type {BookItem, BookStatusDescription as Status} from './BookTypes';

export type Props = {
    book: BookItem,
};

export type State = {
};

class Book extends Component<Props, State> {

    render(): Element<'div'> {
        const {title, authors, imageLinks, shelf} = this.props.book;
        const img = {
            backgroundImage: `url(${imageLinks.smallThumbnail})`,
        };

        return (
            <div className="book">
              <div className="book_top">
                <div className="book_cover" style={img}/>
                <div className="book_shelf_changer">
                  <select>
                    {status_list.map((opt: Status): Element<'option'> => (
                        <option key={opt.value} value={opt.value} selected={opt.value === shelf}>
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
