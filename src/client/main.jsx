import { createRoot } from 'react-dom/client'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {Router} from "./router/Router.jsx";

createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <Router/>
    </NextUIProvider>
);