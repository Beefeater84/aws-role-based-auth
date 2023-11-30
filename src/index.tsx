import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {Authenticator} from '@aws-amplify/ui-react';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';
const rootNode = document.getElementById('root');

// Render your React component instead
if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(
        <PrimeReactProvider>
            <Authenticator.Provider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Authenticator.Provider>
        </PrimeReactProvider>
    );
}
