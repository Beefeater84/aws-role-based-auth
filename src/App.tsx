import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import "./applications/styles/global.css";

import LazyRoutes from "@/applications/providers/Router/LazyRoutes";
import MainMenu from "@/widgets/main-menu/main-menu";
import RequireAuth from "@/applications/providers/Authenticator/RequireAuth";


const Main = lazy(() => import('./pages/main/main'));
const About = lazy(() => import('./pages/about/about'));
const Error = lazy(() => import('./pages/404/error'));
const RedTeam = lazy(() => import('./pages/red-team'));
const BlueTeam = lazy(() => import('./pages/blue-team'));


export default function App() {

    return (
        <div className="container">
            <MainMenu/>
            <Routes>
                <Route element={<LazyRoutes/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route element={<RequireAuth/>}>
                        <Route path="/blue-team" element={<BlueTeam/>}/>
                        <Route path="/red-team" element={<RedTeam/>}/>
                    </Route>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    )
}