import { createRoot } from 'react-dom/client'
import './index.css'
import {routes} from "./router/routes.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes} />);
