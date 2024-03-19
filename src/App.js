import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Home from '../src/components/page/HomePage/HomePage'
import About from '../src/components/page/About/About'
import Portfolio from './components/page/Portfolio/Portfolio';
import Contact from './components/page/Contact/Contact';
import PaymentFailure from './components/Payment/CancelPayment';
import PaymentSuccess from './components/Payment/Payment';
import UserAppInstalledDashboard from './components/Dashboard/UserAppInstalledDashboard';
import UserHaveGuardianDashboard from './components/Dashboard/UserHaveGuardianDashboard';
import NumberOfGuardianDashboard from './components/Dashboard/NumberOfGuardianDashboard';
import UserConnectSafeDashboard from './components/Dashboard/UserConnectSafeDashboard';
import UserLastWeekActivityDashboard from './components/Dashboard/UserLastWeekActivityDashboard';
import SendOutAlarmDashboard from './components/Dashboard/SendOutAlarmDashboard';
import ReceivedAlarmDashboard from './components/Dashboard/ReceivedAlarmDashboard';
import UserPerCountryDashboard from './components/Dashboard/UserPerCountryDashboard';
import AdminProfileDashboard from './components/Dashboard/AdminProfileDashboard';
import CollectionDashboard from './components/Dashboard/CollectionDashboard';
import Login from './components/Authenticate/Login/Login';
import ManageUsersDashboard from './components/Dashboard/ManageUsersDashboard';
import ManageBrandDashboard from './components/Dashboard/ManageBrandDashboard';
import ManageClothesDashboard from './components/Dashboard/ManageClothesDashboard';
import ManageEventsDashboard from './components/Dashboard/ManageEventsDashboard';
import ManageNewsDashboard from './components/Dashboard/ManageNewsDashboard';
import ManageInvoiceDashboard from './components/Dashboard/ManageInvoiceDashboard';
import ManageIncomeDashboard from './components/Dashboard/ManageIncomeDashboard';
import ManagePostingDashboard from './components/Dashboard/ManagePostingDashboard';
import { jwtDecode } from 'jwt-decode';

const tokenIsValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    const expiration = decoded.exp;

    return expiration > Math.floor(Date.now() / 1000);
  } catch (error) {
    return false;
  }
};

const isAuthenticated = (requiredRole) => {
  const token = localStorage.getItem('accessToken');
  const userRole = localStorage.getItem('role');

  if (!tokenIsValid(token)) {
    return false;
  }
  return userRole === requiredRole;
};

const PrivateRoute = ({ element, path, requiredRole }) => {
  if (isAuthenticated(requiredRole)) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

const CUSTOMER_ROLE = "CUSTOMER"
const ADMIN_ROLE = "ADMIN"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/payment-infor' element={<PaymentSuccess />}></Route>
          <Route path='/payment-cancel' element={<PaymentFailure />}></Route>
          <Route path='/admin-manager' element={<PrivateRoute element={<AdminDashboard />} requiredRole={ADMIN_ROLE} />} />
          <Route path='/user-app-installed' element={<PrivateRoute element={<UserAppInstalledDashboard></UserAppInstalledDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/user-have-guardian' element={<PrivateRoute element={<UserHaveGuardianDashboard></UserHaveGuardianDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/number-of-guardian' element={<PrivateRoute element={<NumberOfGuardianDashboard></NumberOfGuardianDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/user-connect-safe' element={<PrivateRoute element={<UserConnectSafeDashboard></UserConnectSafeDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/user-last-week-activity' element={<PrivateRoute element={<UserLastWeekActivityDashboard></UserLastWeekActivityDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/send-out-alarm' element={<PrivateRoute element={<SendOutAlarmDashboard></SendOutAlarmDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/received-alarm' element={<PrivateRoute element={<ReceivedAlarmDashboard></ReceivedAlarmDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/user-per-country' element={<PrivateRoute element={<UserPerCountryDashboard></UserPerCountryDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/edit-profile' element={<PrivateRoute element={<AdminProfileDashboard></AdminProfileDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-collection' element={<PrivateRoute element={<CollectionDashboard></CollectionDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-users' element={<PrivateRoute element={<ManageUsersDashboard></ManageUsersDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-posting' element={<PrivateRoute element={<ManagePostingDashboard></ManagePostingDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-news' element={<PrivateRoute element={<ManageNewsDashboard></ManageNewsDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-events' element={<PrivateRoute element={<ManageEventsDashboard></ManageEventsDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-clothes' element={<PrivateRoute element={<ManageClothesDashboard></ManageClothesDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-brand' element={<PrivateRoute element={<ManageBrandDashboard></ManageBrandDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-invoice' element={<PrivateRoute element={<ManageInvoiceDashboard></ManageInvoiceDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/admin-manage-income' element={<PrivateRoute element={<ManageIncomeDashboard></ManageIncomeDashboard>} requiredRole={ADMIN_ROLE} />} />
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/join-us' element={<Login></Login>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
