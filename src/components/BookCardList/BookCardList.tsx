import { Grid } from '@mui/material';
import BookCard from '../BookCard/BookCard';
import { BookCardListProps } from '../../shared/types/Types';

function BookCardList({
  data,
  handleDeleteBook,
  handleUpdateBookButton,
  handleViewBookAction,
}: BookCardListProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      {data &&
        data.map(
          (book) =>
            book && (
              <BookCard
                key={book.id}
                book={book}
                onDeleteBook={handleDeleteBook}
                onUpdateBookButton={handleUpdateBookButton}
                onViewDetails={handleViewBookAction}
              />
            )
        )}
    </Grid>
  );
}

export default BookCardList;
