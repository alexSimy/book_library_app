import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Stack,
} from '@mui/material';

function SkeletonCard() {
  return (
    <Grid item zeroMinWidth>
      <Card
        sx={{
          maxWidth: '18rem',
          minWidth: '18rem',
          borderRadius: '1rem',
          background: 'rgb(18, 18, 18)',
          padding: '.5rem',
        }}
        component='article'
      >
        <Skeleton
          height={240}
          variant='rectangular'
          animation='wave'
          sx={{
            bgcolor: 'grey.900',
            borderRadius: '1rem',
          }}
        />
        <CardContent>
          <Stack spacing={1.75}>
            {[32, 22, 28, 22, 80].map((e, i) => (
              <Skeleton
                key={i}
                height={e}
                variant='rectangular'
                animation='wave'
                sx={{
                  bgcolor: 'grey.900',
                  borderRadius: '1rem',
                }}
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Skeleton
            height={40}
            width={40}
            variant='rectangular'
            animation='wave'
            sx={{
              bgcolor: 'grey.900',
              borderRadius: '50%',
            }}
          />
          <Skeleton
            height={40}
            width={40}
            variant='rectangular'
            animation='wave'
            sx={{
              bgcolor: 'grey.900',
              borderRadius: '50%',
            }}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default SkeletonCard;
