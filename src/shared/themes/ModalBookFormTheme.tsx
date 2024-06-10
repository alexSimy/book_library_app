import { createTheme } from '@mui/material';

const formTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgb(255 255 255)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(255 255 255 / 23%)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(255 255 255)',
            },
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'white',
        },
      },
    },
  },
});

export default formTheme;
