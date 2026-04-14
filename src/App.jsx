import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Resources from './pages/Resources';
import { Navigation } from './components/Navigation';

const RootLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}