import { Link } from 'react-router-dom';

import logo from '../../assets/static/imgs/bookfellow-logo.png';
import styles from './MainHeader.module.css';
import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import { Container, Stack, Typography } from '@mui/material';

function MainHeader(): React.JSX.Element {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <header className={styles.header}>
      <Container className={styles.navWrap} maxWidth='lg'>
        <Stack
          direction={'column'}
          component={'nav'}
          className={styles.navContent}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <div className={styles.logo}>
            <Link to='/'>
              <img src={logo} alt='Bookfellow' />
            </Link>
          </div>
          <div className={styles.navListWrapper}>
            <Link to='/library'>
              <Typography
                variant='h6'
                noWrap
                sx={{
                  '&:hover': {
                    fontWeight: '700',
                  },
                }}
              >
                {staticTexts.homePageLibraryButton}
              </Typography>
            </Link>
          </div>
        </Stack>
      </Container>
    </header>
  );
}

export default MainHeader;
