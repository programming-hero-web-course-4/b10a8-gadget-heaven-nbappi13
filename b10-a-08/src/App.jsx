import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppProvider from './context/AppContext'; 

function App() {
    const location = useLocation();
    const isErrorPage = location.pathname === '/404';

    return (
        <HelmetProvider>
            <AppProvider> 
                <div>
                    <Navbar />
                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    {!isErrorPage && <Footer />}
                </div>
            </AppProvider>
        </HelmetProvider>
    );
}

export default App;
