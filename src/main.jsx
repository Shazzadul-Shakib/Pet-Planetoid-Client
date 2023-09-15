import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Will provide auth info among all children inside it */}
      <HelmetProvider>
        {/* Helmet provider will provide dynamic title of every page in browser */}
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {/* Router provider make sure that every routes under router.jsx got his own path  */}
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
