import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Banner from './layout/Banner.jsx';
import ApartmentGrid from './components/ApartmentGrid';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApartmentPage from './pages/ApartmentPage.jsx';
import About from './pages/About.jsx';
import { ErrorPageNotFound } from './pages/ErrorPageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: (
          <main>
            <Banner />
            <ApartmentGrid />
          </main>
        ),
      },
      {
        path: "about",
        element: <About />, // Percorso per A propos
      },
      {
        path: "flat",
        element: <ApartmentPage />, // Percorso per Nos appartements
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
