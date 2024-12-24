// React imports:
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';

// Application CSS imports:
import './styles/reset.css'
import './styles/variables.css'
import './styles/default.css'
import './styles/main.css'

// Router import:
import router from './router';

// Root declaration:
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Main function:
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
