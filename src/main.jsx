import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> 
      {/* Helmet provider will provide dynamic title of every page in browser */}
      <RouterProvider router={router} />
      {/* Router provider make sure that every routes under router.jsx got his own path  */}
    </HelmetProvider>
  </React.StrictMode>
);
