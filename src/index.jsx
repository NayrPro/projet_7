import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Root';
import About from './About';
import Housing from './Housing';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route path="about" element={<About />} />
      <Route path="housing/:id" element={<Housing />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
