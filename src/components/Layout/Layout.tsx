import type { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
        <Navbar />
        <Sidebar />
        <main className="layout-main">
            {children}
        </main>
        </div>
    );
};

export default Layout;