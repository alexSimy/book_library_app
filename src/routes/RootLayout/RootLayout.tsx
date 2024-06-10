import { Outlet } from 'react-router-dom';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';

import styles from './RootLayout.module.css';
import staticTexts from '../../assets/static/text/static-text.json';
import { createContext } from 'react';

export const StaticTextsContext = createContext(staticTexts);

function RootLayout(): React.JSX.Element {
  return (
    <>
      <StaticTextsContext.Provider value={staticTexts}>
        <MainHeader />
        <main className={styles.mainWrapper}>
          <Outlet />
        </main>
        <MainFooter />
      </StaticTextsContext.Provider>
    </>
  );
}

export default RootLayout;
