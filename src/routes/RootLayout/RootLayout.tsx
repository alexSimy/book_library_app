import { Outlet } from 'react-router-dom';
import MainFooter from '../../components/MainFooter/MainFooter';
import MainHeader from '../../components/MainHeader/MainHeader';

function RootLayout(): React.JSX.Element {
  return (
  <>
    <MainHeader/>
    <Outlet />
    <MainFooter/>
  </>);
}

export default RootLayout;