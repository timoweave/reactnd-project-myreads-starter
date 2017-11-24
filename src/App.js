import React from 'react';
import BookShelves from './BookShelves';
import BookSearch from './BookSearch';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {getAll, update, search} from './BooksAPI';
import './App.css';

import type {Element} from 'react';
import type {BookInfo, BookStatus} from './BookTypes';

export type Props = {
};

export type State = {
    books: ?Array<BookInfo>,
};

class App extends React.Component<Props, State> {
    state = {
        books: null,
    }

    componentDidMount(): void {
        getAll().then((books: Array<BookInfo>) => {
            this.setState({books});
        });
    }

    change = (book: BookInfo, shelf: BookStatus): void => {
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

    find = (query: string, max: number = 20): void => {
        search(query, max).then((books: Array<BookInfo>): void => {
            console.log({books});
            this.setState({books});
        });
    };

    render(): Element<typeof BrowserRouter> {
        const {books} = this.state;
        const shelves = (props: *): Element<typeof BookShelves> => (
                <BookShelves books={books} update={this.change}/>
        );
        const search = (props: *): Element<typeof BookSearch> => (
                <BookSearch books={books} update={this.change} search={this.find}/>
        );
        return (
           <BrowserRouter>
              <Switch>
                <Route exact path="/" component={shelves}/>
                <Route exact path="/search" component={search}/>
                <Route component={shelves}/>
              </Switch>
          </BrowserRouter>
        );
    }
}

export default App
