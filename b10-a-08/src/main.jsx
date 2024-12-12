import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './Router';
import AppProvider from './context/AppContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider> 
            <RouterProvider router={router} />
        </AppProvider>
    </React.StrictMode>
);
