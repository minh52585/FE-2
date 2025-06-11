import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
