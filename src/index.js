import React from 'react';
import ReactDOM from 'react-dom/client';
import { Animal } from './pages/Animal';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Main } from './pages/Main';
import { Words } from './pages/Words';
import { Rebus } from './pages/Rebus'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: '/animal',
    element: <Animal />
  },
  {
    path: "/words",
    element: <Words />,
  },
  {
    path: "/rebus",
    element: <Rebus />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
