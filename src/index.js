import React from 'react';
import ReactDOM from 'react-dom/client';
import { Animal } from './pages/Animal';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import {Main} from './pages/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {path:'/animal',
  element: <Animal/>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
