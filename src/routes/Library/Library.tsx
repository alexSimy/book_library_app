import useLibraryHooks from '../../hooks/useLibraryHooks';
import { Container, Stack } from '@mui/material';
import BookCardList from '../../components/BookCardList/BookCardList';
import NoBooksMessage from '../../components/NoBooksMessage/NoBooksMessage';
import BookCardListLoading from '../../components/BookCardListLoading/BookCardListLoading';
import SkeletonCardList from '../../components/SkeletonCardList/SkeletonCardList';
import ModalBookForm from '../../components/ModalBookForm/ModalBookForm';
import Error from '../../components/Error/Error';
import BookDetailsModal from '../../components/BookDetailsModal/BookDetailsModal';
import AddNewBookButton from '../../components/AddNewBookButton/AddNewBookButton';

function Library(): React.JSX.Element {
  const {
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
  } = useLibraryHooks();

  return (
    <>
      <Container
        component={'section'}
        sx={{ minHeight: '30rem', mt: 10, mb: 10, p: 0 }}
        maxWidth='xl'
      >
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
          maxWidth='xl'
          height={'100%'}
        >
          {!isLoading && !isValidating && error && <Error error={`${error}`} />}
          {!isLoading && !isValidating && data && (
            <Container
              component={'section'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '100%',
              }}
            >
              {data.length > 0 && (
                <BookCardList
                  data={data}
                  handleDeleteBook={handleDeleteBook}
                  handleUpdateBookButton={handleUpdateBookButton}
                  handleViewBookAction={handleViewBookAction}
                />
              )}
              {data.length === 0 && <NoBooksMessage />}
            </Container>
          )}
          {(isLoading ||
            (skeletonNumber < 1 && isValidating && !isLoading)) && (
            <BookCardListLoading />
          )}
          {skeletonNumber >= 1 && isValidating && (
            <SkeletonCardList dataLength={skeletonNumber} />
          )}
        </Stack>
      </Container>

      <AddNewBookButton onClick={handleAddNewBookButton} />

      <ModalBookForm
        openModal={openAddBook}
        onModalClose={handleAddNewBookModalClose}
        onFormSubmit={handleAddNewBook}
        operation={'add'}
      />

      <ModalBookForm
        openModal={openUpdateBook}
        onModalClose={handleUpdateBookModalClose}
        onFormSubmit={handleUpdateBook}
        operation={'update'}
        book={bookToBeModified}
      />

      <BookDetailsModal
        openModal={openViewBook}
        book={bookToBeViewed}
        onModalClose={handleviewBookModalClose}
      />
    </>
  );
}

export default Library;
