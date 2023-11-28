import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const Main = lazy(() => import('./pages/main/main'));
const About = lazy(() => import('./pages/about/about'));


export default function App() {
    return (
        <div className="container">
            <nav>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </nav>
            <Suspense fallback={<>Loading ...</>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}