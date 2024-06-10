import { Stack, Typography } from '@mui/material';
import type { ErrorProps } from '../../shared/types/Types';

function Error({ error }: ErrorProps) {
  return (
    <Stack
      maxWidth='xl'
      height={'100%'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={4}
    >
      <Typography color='white' variant='h4' component={'h2'}>
        Ooops! Our server is not responding!
      </Typography>
      <Typography color='white' variant='h5' component={'h3'}>
        Please try again a bit later!
      </Typography>
      <Typography color='white' variant='caption' component={'p'}>
        ERROR: {error}
      </Typography>
    </Stack>
  );
}

export default Error;
