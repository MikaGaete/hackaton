import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "../pages/Landing.jsx";
import {BracketPage} from "../pages/BracketPage.jsx";
import {Learn} from "../pages/Learn.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path={"/brackets/:id"} element={<BracketPage/>}/>
                <Route path={"/learn"} element={<Learn/>}/>
            </Routes>
        </BrowserRouter>
    )
}