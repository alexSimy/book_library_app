import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Fab,
  Tooltip,
  Box,
  Stack,
  CardActionArea,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { BookCardProps } from '../../shared/types/Types';
import bookTemplateImg from '../../assets/static/imgs/book-template.png';

import styles from './BookCard.module.css';
import { DeleteForever } from '@mui/icons-material';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import { useContext } from 'react';

function BookCard({
  book,
  onDeleteBook,
  onUpdateBookButton,
  onViewDetails,
}: BookCardProps) {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <Grid id={`${book.id}`} item zeroMinWidth>
      <Card
        sx={{
          maxWidth: '18rem',
          minWidth: '18rem',
          borderRadius: '1rem',
          background: 'rgb(18, 18, 18)',
          padding: '.5rem',
        }}
        className={styles.bookCard}
        component='article'
      >
        <CardActionArea
          onClick={() => {
            onViewDetails(book);
          }}
        >
          <CardMedia
            component={'img'}
            height={240}
            image={bookTemplateImg}
            alt={book.title}
            sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
            className={styles.media}
          ></CardMedia>
          <CardContent>
            <Stack spacing={2}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                color='#fff'
              >
                {book.title}
              </Typography>
              <Typography
                variant='subtitle2'
                color='#fff'
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  lineBreak: 'loose',
                }}
              >
                {`${book.author}`}
              </Typography>
              <Typography
                variant='subtitle2'
                color='#fff'
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  lineBreak: 'loose',
                }}
              >
                {`${book.genre}`}
              </Typography>
              <Stack spacing={1}>
                <Typography variant='subtitle2' color='#fff'>
                  {`${staticTexts.modalFormTexts.descriptionSection.descriptionText}`}
                  :
                </Typography>
                <Box
                  height={'5rem'}
                  bgcolor={'#303030'}
                  borderRadius={'0.5rem'}
                  padding={'.5rem'}
                  alignContent={'center'}
                  justifyContent={'center'}
                >
                  <Typography
                    variant='body2'
                    color='#fff'
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      lineBreak: 'loose',
                    }}
                  >
                    {book.description}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Tooltip title={'Edit'}>
            <Fab
              size='small'
              color='primary'
              aria-label='edit'
              onClick={(el) => {
                el.preventDefault();
                el.stopPropagation();
                onUpdateBookButton(book);
              }}
            >
              <EditIcon />
            </Fab>
          </Tooltip>
          <Tooltip title={'Delete'}>
            <Fab
              size='small'
              color='error'
              aria-label='delete'
              onClick={(el) => {
                el.preventDefault();
                el.stopPropagation();
                onDeleteBook(book.id);
              }}
            >
              <DeleteForever />
            </Fab>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default BookCard;
