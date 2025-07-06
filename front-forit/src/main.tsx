import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from "react-router";
import './index.css';
import { rootRouter } from './routers';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rootRouter} />
  </StrictMode>,
)
