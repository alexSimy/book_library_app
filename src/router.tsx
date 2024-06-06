import {createBrowserRouter} from 'react-router-dom';

import RootLayout from './routes/RootLayout/RootLayout';
import HomePage from './routes/HomePage/HomePage';
import Library from './routes/Library/Library';

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children: [
      {
        path:'/',
        element: <HomePage/>,
      },
      {
        path:'/library',
        element: <Library/>,
      },
    ]
  }
]);

export default router;