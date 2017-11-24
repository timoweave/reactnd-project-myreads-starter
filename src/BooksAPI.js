import type {BookInfo, BookStatus} from './BookTypes';

const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.

if (!window.localStorage.token)
  window.localStorage.token = Math.random().toString(36).substr(-8)
let {token} = window.localStorage

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId: string): Promise<BookInfo> => {
    return fetch(`${api}/books/${bookId}`, {
        headers
    }).then(res => {
        console.log({get: res.json()});
        return res.json();
    }).then(data => {
        return data.book;
    });
};

export const getAll = (): Promise<Array<BookInfo>> => {
    return fetch(`${api}/books`, {
        headers
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log({getAll: data.books});
        return data.books;
    });
};

export const update = (book: BookInfo, shelf: BookStatus): Promise<Response> => {
    return fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => {
        console.log({update: res.json()});
        return res.json();
    });
};

export const search = (query: string, maxResults: number): Promise<Array<BookInfo>> => {
    return fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, maxResults })
    }).then(res => {
        console.log({search: res.json(), res, body: res.body});
        return res.json();
    }).then(data => {
        console.log({books: data.books, data});
        return data.books;
    });
};
