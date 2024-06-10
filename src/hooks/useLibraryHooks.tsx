import useSWR from 'swr';

import {
  getAllBooks,
  deleteBook,
  addBook,
  updateBook,
} from '../shared/services/requests';
import { Book } from '../shared/types/Types';
import { useCallback, useState } from 'react';

export const BOOK_INITIAL_VALUES: Book = {
  id: 0,
  title: '',
  genre: '',
  author: '',
  description: '',
};

const BOOK_LIBRARY_SERVER:
  | string
  | undefined = `http://192.168.0.113:3001/books`;

function useLibraryHooks() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Book[]>(
    BOOK_LIBRARY_SERVER,
    getAllBooks,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  const [skeletonNumber, setSkeletonNumber] = useState(0);

  const [openAddBook, setOpenAddBook] = useState(false);
  const [openUpdateBook, setOpenUpdateBook] = useState(false);
  const [openViewBook, setOpenViewBook] = useState(false);

  const [bookToBeModified, setBookToBeModified] = useState(BOOK_INITIAL_VALUES);
  const [bookToBeViewed, setBookToBeViewed] = useState(BOOK_INITIAL_VALUES);

  const handleAddNewBookButton = () => {
    setOpenAddBook(true);
  };

  const handleAddNewBookModalClose = () => {
    setOpenAddBook(false);
  };

  const handleUpdateBookButton = (book: Book) => {
    setOpenUpdateBook(true);
    setBookToBeModified(book);
  };

  const handleUpdateBookModalClose = () => {
    setOpenUpdateBook(false);
    setBookToBeModified(BOOK_INITIAL_VALUES);
  };

  const handleViewBookAction = (book: Book) => {
    setOpenViewBook(true);
    setBookToBeViewed(book);
  };

  const handleviewBookModalClose = () => {
    setOpenViewBook(false);
    setBookToBeViewed(BOOK_INITIAL_VALUES);
  };

  const handleDeleteBook = useCallback(
    async (id: number | undefined) => {
      if (id && BOOK_LIBRARY_SERVER) {
        await deleteBook(BOOK_LIBRARY_SERVER as string, id);
        if (data && data.length > 0) {
          setSkeletonNumber(data.length - 1);
        }
        mutate();
      } else {
        throw new Error(`handleDeleteBook: id is undefined`);
      }
    },
    [mutate, data]
  );

  const handleAddNewBook = useCallback(
    async (
      book: Book,
      setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void }
    ) => {
      if (BOOK_LIBRARY_SERVER) {
        const { id, ...newBook } = book;
        await addBook(BOOK_LIBRARY_SERVER as string, newBook);
        if (data && data.length) {
          setSkeletonNumber(data.length + 1);
        }
        setSubmitting(false);
        handleAddNewBookModalClose();
        mutate();
      } else {
        throw new Error(
          `handleDeleteBook: REACT_APP_BOOK_LIBRARY_SERVICE is undefined`
        );
      }
    },
    [mutate, data]
  );

  const handleUpdateBook = useCallback(
    async (
      book: Book,
      setSubmitting: { (isSubmitting: boolean): void; (arg0: boolean): void }
    ) => {
      if (book.id && BOOK_LIBRARY_SERVER) {
        const { id, ...updatedBook } = book;
        await updateBook(BOOK_LIBRARY_SERVER as string, id, updatedBook);
        setSubmitting(false);
        handleUpdateBookModalClose();
        mutate();
      } else {
        throw new Error(
          `handleUpdateBook: book object does not have id field set or REACT_APP_BOOK_LIBRARY_SERVICE is undefined`
        );
      }
    },
    [mutate]
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    skeletonNumber,
    openAddBook,
    openUpdateBook,
    bookToBeModified,
    openViewBook,
    bookToBeViewed,
    handleDeleteBook,
    handleAddNewBookButton,
    handleAddNewBookModalClose,
    handleAddNewBook,
    handleUpdateBookButton,
    handleUpdateBookModalClose,
    handleUpdateBook,
    handleViewBookAction,
    handleviewBookModalClose,
  };
}

export default useLibraryHooks;
