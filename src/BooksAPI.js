import type {Book} from './BooksTypes';

const api = "https://reactnd-books-api.udacity.com"

// Generate a unique token for storing your bookshelf data on the backend server.

if (!window.localStorage.token)
  window.localStorage.token = Math.random().toString(36).substr(-8)
let {token} = window.localStorage

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId: string): Promise<Book> =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => {
        console.log({get: res.json()});
        return res.json();
    })
    .then(data => data.book)

export const getAll = (): Promise<Array<Book>> =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => {
        console.log({getAll: data.books});
        return data.books;
    })

export const update = (book: Book, shelf: string): Promise<Response> =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => {
      console.log({update: res.json()});
      return res.json();
  })

export const search = (query: string, maxResults: number): Promise<Array<Book>> =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => {
      console.log({search: res.json()});
      return res.json();
  }).then(data => data.books)

getAll().then((data: Array<Book>) => console.log({data}));
