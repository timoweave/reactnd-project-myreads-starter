import React from 'react';
import BookShelves from './BookShelves';
// import {BrowserRouter, Route} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {getAll, update} from './BooksAPI';
import './App.css';

import type {BookInfo} from './BookTypes';

export type Props = {
};

export type State = {
    books: ?Array<BookInfo>,
};

class BooksApp extends React.Component<Props, State> {
    state = {
        books: null,
    }

    componentDidMount(): void {
        getAll().then((books: Array<BookInfo>) => {
            this.setState({books});
        });
    }

    changeShelf = (book: BookInfo, shelf: BookReadingStatus): void => {
        const {books = null} = this.state;
        if (books === null) {
            return;
        }

        this.setState({
            books: books.map((book_i: BookInfo): BookInfo => ({
                ...book_i,
                shelf: (book_i.id !== book.id) ? book_i.shelf : shelf,
            })),
        });

        update(book, shelf)
            .then((response) => {
                console.log({book, shelf, response});
            })
            .catch((error) => {
                console.error({book, shelf, error});
            });
    };

    render(): Element<typeof BrowserRouter> {
        const {books} = this.state;
        return (
           <BrowserRouter>
              <Switch>
                <Route exact path="/" render={(history) => (<BookShelves books={books} update={this.changeShelf}/>)}/>
                <Route exact path="/search" render={(history) => (<div>hello search</div>)}/>
                <Route render={(history) => (<BookShelves books={books} update={this.changeShelf}/>)}/>
              </Switch>
          </BrowserRouter>
        );
    }
}

export default BooksApp
