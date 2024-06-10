type ErrorProps = {
  error: string;
};

type SimpleBook = {
  title: string;
  genre: string;
  author: string;
  description: string;
};

type Book = { id: number } & SimpleBook;

type BookOrUndefined = Book | undefined;
type BookListOrUndefined = Book[] | undefined;

type UseLibraryType = {
  data: BookOrUndefined;
  error: any;
  isLoading: boolean;
};

type BookCardProps = {
  book: Book;
  onDeleteBook: (id: number) => void;
  onUpdateBookButton: (book: Book) => void;
  onViewDetails: (book: Book) => void;
};

type BookCardListProps = {
  data: BookListOrUndefined;
  handleDeleteBook: (id: number) => void;
  handleUpdateBookButton: (book: Book) => void;
  handleViewBookAction: (book: Book) => void;
};

type BookFormProps = {
  openModal: boolean;
  operation: string;
  onModalClose: () => void;
  onFormSubmit: (
    book: Book,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
  book?: Book;
};

type BookDetailsModalProps = {
  openModal: boolean;
  book: Book;
  onModalClose: () => void;
};

type AddNewBookButtonProps = {
  onClick: () => void;
};

type ModalFormTexts = {
  titleText: string;
  buttonText: string;
};

export type {
  ErrorProps,
  Book,
  BookOrUndefined,
  BookListOrUndefined,
  SimpleBook,
  UseLibraryType,
  BookCardProps,
  BookCardListProps,
  BookFormProps,
  BookDetailsModalProps,
  AddNewBookButtonProps,
  ModalFormTexts,
};
