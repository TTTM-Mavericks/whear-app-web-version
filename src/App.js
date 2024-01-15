import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Header from '../src/components/page/Header/Header';
import Footer from '../src/components/page/Footer/Footer';
import Home from '../src/components/page/HomePage/HomePage'
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
          <Route path='/' element={<div><Header/><Home/><Footer/></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
