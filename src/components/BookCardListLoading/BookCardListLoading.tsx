import { CircularProgress, Container } from '@mui/material';

function BookCardListLoading() {
  return (
    <Container
      component={'section'}
      maxWidth='xl'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <CircularProgress disableShrink />
    </Container>
  );
}

export default BookCardListLoading;
