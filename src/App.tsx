import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Resources from './pages/Resources';
import { Navigation } from './components/Navigation';
import { JSX } from 'react';

const RootLayout = (): JSX.Element => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
    ],
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}