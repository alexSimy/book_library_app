import { useContext } from 'react';
import { StaticTextsContext } from '../../routes/RootLayout/RootLayout';
import { Container } from '@mui/material';
function MainFooter(): React.JSX.Element {
  const staticTexts = useContext(StaticTextsContext);
  return (
    <footer
      style={{ display: 'flex', flex: '1', backgroundColor: 'rgb(7, 8, 8)' }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10rem',
          width: '100%',
        }}
        component={'footer'}
      >
        {staticTexts.footerText}
      </Container>
    </footer>
  );
}

export default MainFooter;
