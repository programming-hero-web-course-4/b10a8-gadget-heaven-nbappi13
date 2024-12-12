import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppProvider from './context/AppContext'; 

function App() {
    const location = useLocation();
    const isErrorPage = location.pathname === '/404';

    return (
        <AppProvider> 
            <div>
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                {!isErrorPage && <Footer />}
            </div>
        </AppProvider>
    );
}

export default App;
