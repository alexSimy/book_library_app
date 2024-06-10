import { Container, Grid } from '@mui/material';
import SkeletonCard from '../SkeletonCard/SkeletonCard';

function SkeletonCardList({ dataLength }: { dataLength: number }) {
  return (
    <Container
      component={'section'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
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
        {new Array(dataLength)
          .fill(1)
          .map((e, i) => e && <SkeletonCard key={i} />)}
      </Grid>
    </Container>
  );
}

export default SkeletonCardList;
