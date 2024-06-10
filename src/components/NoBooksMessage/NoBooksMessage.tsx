import { Stack, Typography } from '@mui/material';

function NoBooksMessage() {
  return (
    <Stack
      maxWidth='xl'
      height={'100%'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={4}
    >
      <Typography color='white' variant='h3' component={'h2'}>
        Oop! Looks like your library is empty.
      </Typography>
      <Typography color='white' variant='h4' component={'h3'}>
        Start your collection by adding a new book!
      </Typography>
    </Stack>
  );
}

export default NoBooksMessage;
