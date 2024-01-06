import * as React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuAdmin from '../Menu/MenuAdmin';

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <Header />
            <MenuAdmin />
            <p>This is admin dashboard</p>
            <Footer />
        </div>
    );
}

export default AdminDashboard;
