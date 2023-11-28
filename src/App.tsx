import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import "./applications/styles/global.css";
import MainMenu from "./widgets/main-menu/main-menu";



const Main = lazy(() => import('./pages/main/main'));
const About = lazy(() => import('./pages/about/about'));
const Error = lazy(() => import('./pages/404/error'));
const BlueTeam = lazy(() => import('./pages/blue-team'));
const RedTeam = lazy(() => import('./pages/red-team'));


export default function App() {

    return (
        <div className="container">
            <MainMenu />
            <Suspense fallback={<>Loading ..</>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blue-team" element={<BlueTeam/>}/>
                    <Route path="/red-team" element={<RedTeam/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}