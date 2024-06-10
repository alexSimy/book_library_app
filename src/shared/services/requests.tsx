import axios, { AxiosResponse } from 'axios';

import { Book, SimpleBook } from '../types/Types';

const BOOK_LIBRARY_SERVER = `${process.env.REACT_APP_BOOK_LIBRARY_SERVICE}/books`;

const server = axios.create({ baseURL: BOOK_LIBRARY_SERVER });

async function getAllBooks(url: string): Promise<Book[]> {
  const resp: AxiosResponse = await server
    .get<Book[]>(url)
    .then((resp) => resp)
    .catch((err) => {
      throw new Error(`getAllBooks: ${err}`);
    });
  return resp.data;
}

async function addBook(url: string, data: SimpleBook): Promise<Book[]> {
  const resp: AxiosResponse = await server
    .post(url, data)
    .then((resp) => resp)
    .catch((err) => {
      throw new Error(`addBook ${err}`);
    });
  return resp.data;
}

async function updateBook(
  url: string,
  id: number,
  data: SimpleBook
): Promise<Book[]> {
  const resp: AxiosResponse = await server
    .put(`${url}/${id}`, data)
    .then((resp) => resp)
    .catch((err) => {
      throw new Error(`addBook ${err}`);
    });
  return resp.data;
}

async function deleteBook(url: string, id: number): Promise<Book[]> {
  const resp: AxiosResponse = await server
    .delete(`${url}/${id}`)
    .then((resp) => resp)
    .catch((err) => {
      throw new Error(`addBook ${err}`);
    });
  return resp.data;
}

export { getAllBooks, addBook, updateBook, deleteBook };
