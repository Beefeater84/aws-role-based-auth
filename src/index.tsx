import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';
const rootNode = document.getElementById('root');

// Render your React component instead
if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
