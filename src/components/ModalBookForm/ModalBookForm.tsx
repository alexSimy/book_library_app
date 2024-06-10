import { Form, Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Fab,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import type {
  BookFormProps,
  Book,
  ModalFormTexts,
} from '../../shared/types/Types';
import validationSchema from '../../schemas/BookFormSchema';
import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import { CloseSharp } from '@mui/icons-material';

import { ThemeProvider } from '@emotion/react';
import formTheme from '../../shared/themes/ModalBookFormTheme';
import { BOOK_INITIAL_VALUES } from '../../hooks/useLibraryHooks';
import styles from './ModalBookForm.module.css';

function ModalBookForm({
  openModal,
  operation,
  onModalClose,
  onFormSubmit,
  book,
}: BookFormProps): React.JSX.Element {
  const staticTexts = useContext(StaticTextsContext);

  const { titleText, buttonText }: ModalFormTexts = Object.entries(
    staticTexts.modalFormTexts
  ).filter(([key, value]) => key === 'add')[0][1] as ModalFormTexts;

  const initialValues: Book = book && book.id ? book : BOOK_INITIAL_VALUES;

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
        }}
        maxWidth={'sm'}
      >
        <Box
          bgcolor={'rgba(29, 35, 39, 1)'}
          sx={{
            padding: '4rem 2rem',
            borderRadius: '1rem',
            position: 'relative',
            width: '100%',
          }}
        >
          <Fab
            id='closeButton'
            size='small'
            color='default'
            onClick={onModalClose}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <CloseSharp />
          </Fab>
          <Stack spacing={4}>
            <Typography color={'#fff'} component={'h3'} variant='h4'>
              {titleText}
            </Typography>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                onFormSubmit(values, setSubmitting);
              }}
            >
              {({
                handleChange,
                handleBlur,
                isSubmitting,
                errors,
                values,
                touched,
              }) => {
                return (
                  <Form autoComplete='off'>
                    <Stack direction={'column'} spacing={4}>
                      <ThemeProvider theme={formTheme}>
                        <TextField
                          label={`${staticTexts.modalFormTexts.titleSection.titleText}`}
                          variant='outlined'
                          type='text'
                          name='title'
                          placeholder={`${staticTexts.modalFormTexts.titleSection.titlePlaceholderText}`}
                          color='primary'
                          sx={{ mb: 3 }}
                          fullWidth
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.title && Boolean(errors.title)}
                          helperText={touched.title && errors.title}
                        />
                        <TextField
                          label={`${staticTexts.modalFormTexts.genreSection.genreText}`}
                          variant='outlined'
                          type='text'
                          name='genre'
                          placeholder={`${staticTexts.modalFormTexts.genreSection.genrePlaceholderText}`}
                          sx={{ mb: 3 }}
                          fullWidth
                          value={values.genre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.genre && Boolean(errors.genre)}
                          helperText={touched.genre && errors.genre}
                        />
                        <TextField
                          label={`${staticTexts.modalFormTexts.authorSection.authorText}`}
                          variant='outlined'
                          type='text'
                          name='author'
                          placeholder={`${staticTexts.modalFormTexts.authorSection.authorPlaceholderText}`}
                          sx={{ mb: 3 }}
                          fullWidth
                          value={values.author}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.author && Boolean(errors.author)}
                          helperText={touched.author && errors.author}
                        />
                        <TextField
                          label={`${staticTexts.modalFormTexts.descriptionSection.descriptionText}`}
                          variant='outlined'
                          type='text'
                          name='description'
                          placeholder={`${staticTexts.modalFormTexts.descriptionSection.descriptionPlaceholderText}`}
                          sx={{ mb: 3 }}
                          fullWidth
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.description && Boolean(errors.description)
                          }
                          helperText={touched.description && errors.description}
                          multiline
                          rows={5}
                          className={styles.description}
                        />
                      </ThemeProvider>
                      <Button
                        variant='outlined'
                        type='submit'
                        size='large'
                        disabled={isSubmitting}
                        sx={{ borderRadius: '1rem' }}
                      >
                        {isSubmitting ? 'Submiting...' : buttonText}
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}

export default ModalBookForm;
