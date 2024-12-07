import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const location = useLocation();
    const isErrorPage = location.pathname === '/404';

    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {!isErrorPage && <Footer />}
        </>
    );
}

export default App;
