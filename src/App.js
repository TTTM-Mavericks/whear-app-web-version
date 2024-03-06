import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Home from '../src/components/page/HomePage/HomePage'
import About from '../src/components/page/About/About'
import Portfolio from './components/page/Portfolio/Portfolio';
import Contact from './components/page/Contact/Contact';
import PaymentFailure from './components/Payment/CancelPayment';
import PaymentSuccess from './components/Payment/Payment';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin-manager' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-app-installed' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-have-guardian' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/number-of-guardian' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-connect-safe' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-last-week-activity' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/send-out-alarm' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/received-alarm' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-per-country' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/payment-infor' element={<PaymentSuccess/>}></Route>
          <Route path='/payment-cancel' element={<PaymentFailure/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
