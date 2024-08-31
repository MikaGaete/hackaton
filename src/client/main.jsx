import { createRoot } from 'react-dom/client'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {Landing} from "./Pages/Landing.jsx";

createRoot(document.getElementById('root')).render(
    <NextUIProvider>
        <Landing/>
    </NextUIProvider>
);
