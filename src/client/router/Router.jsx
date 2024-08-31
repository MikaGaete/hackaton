import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "../pages/Landing.jsx";
import {Bracket} from "../pages/Bracket.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path={"/brackets/:id"} element={<Bracket/>}/>
            </Routes>
        </BrowserRouter>
    )
}