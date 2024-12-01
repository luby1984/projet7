cimport { StrictMode } from 'react';
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
        element: <About />, // Percorso per la pagina À propos
      },
      {
        path: "flat/:id",
        element: <ApartmentPage />, // Percorso per gli appartamenti
      },
     
      {
        path: "*", // Rotta di fallback per qualsiasi altro percorso
        element: <ErrorPageNotFound />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);