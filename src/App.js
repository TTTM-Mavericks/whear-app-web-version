import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin-manager' element={<AdminDashboard></AdminDashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
