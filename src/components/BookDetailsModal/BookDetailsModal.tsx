import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import type { BookDetailsModalProps } from '../../shared/types/Types';
import bookTemplateImg from '../../assets/static/imgs/book-template.png';
import { CloseSharp } from '@mui/icons-material';

import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import styles from './BookDetailsModal.module.css';

function BookDetailsModal({
  openModal,
  book,
  onModalClose,
}: BookDetailsModalProps) {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <Modal
      open={openModal}
      onClose={onModalClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        component={'section'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 !important',
          backgroundColor: 'transparent',
        }}
        maxWidth={'md'}
      >
        <Card
          sx={{
            padding: '2rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(29, 35, 39, 1)',
            width: '100%',
          }}
        >
          <Stack
            direction={'row'}
            spacing={4}
            flexWrap={'wrap'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 'auto',
              position: 'relative',
            }}
            maxWidth={'100%'}
          >
            <CardMedia
              component={'img'}
              height={240}
              image={bookTemplateImg}
              alt={book.title}
              sx={{
                padding: '1em 1em 0 1em',
                objectFit: 'contain',
                minWidth: '10rem',
                maxWidth: '15rem',
                backgroundColor: 'transparent',
                display: 'inline-flex',
                margin: '0 auto',
              }}
            ></CardMedia>

            <CardContent sx={{ minWidth: '15rem', display: 'flex', flex: '1' }}>
              <Stack
                spacing={2}
                maxWidth={'100%'}
                sx={{
                  width: '100%',
                }}
              >
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='white'
                >
                  {book.title}
                </Typography>
                <Typography variant='subtitle2' color='white'>
                  {`${staticTexts.modalFormTexts.authorSection.authorText}: ${book.author}`}
                </Typography>
                <Typography variant='subtitle1' color='white'>
                  {`${staticTexts.modalFormTexts.genreSection.genreText}: ${book.genre}`}
                </Typography>
                <Stack spacing={1}>
                  <Typography variant='subtitle2' color='white'>
                    {`${staticTexts.modalFormTexts.descriptionSection.descriptionText}`}
                    :
                  </Typography>
                  <Box
                    minHeight={'5rem'}
                    maxHeight={'10rem'}
                    bgcolor={'rgba(50, 60, 66, 1)'}
                    borderRadius={'0.5rem'}
                    padding={'.8rem .5rem'}
                    alignContent={'center'}
                    justifyContent={'center'}
                    overflow={'auto'}
                    className={styles.description}
                    width={'100%'}
                  >
                    <Typography variant='body2' color='white'>
                      {book.description}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </CardContent>

            <Fab
              size='small'
              color='default'
              onClick={onModalClose}
              sx={{ position: 'absolute', right: '-1rem', top: '-1rem' }}
            >
              <CloseSharp />
            </Fab>
          </Stack>
        </Card>
      </Container>
    </Modal>
  );
}
export default BookDetailsModal;
