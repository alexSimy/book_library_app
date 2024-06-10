import Stack from '@mui/material/Stack';

import styles from './HomePage.module.css';

import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import bookFellowMagazineImg from '../../assets/static/imgs/the_bookfellow_magazine.png';

function HomePage(): React.JSX.Element {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <Stack
      direction='row'
      component='section'
      className={styles.mainContentWrapper}
    >
      <div className={styles.imageCanvas}>
        <img src={bookFellowMagazineImg} alt='The Bookfellow Magazine' />
      </div>
      <div className={styles.description}>
        <Stack direction='column' spacing={4} sx={{ minWidth: 0 }}>
          {staticTexts.homePageTexts.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </Stack>
      </div>
    </Stack>
  );
}

export default HomePage;
