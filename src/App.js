import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserAppInstalledDashboard from './components/Dashboard/UserAppInstalledDashboard';
import UserHaveGuardianDashboard from './components/Dashboard/UserHaveGuardianDashboard';
import NumberOfGuardianDashboard from './components/Dashboard/NumberOfGuardianDashboard';
import UserConnectSafeDashboard from './components/Dashboard/UserConnectSafeDashboard';
import UserLastWeekActivityDashboard from './components/Dashboard/UserLastWeekActivityDashboard';
import SendOutAlarmDashboard from './components/Dashboard/SendOutAlarmDashboard';
import ReceivedAlarmDashboard from './components/Dashboard/ReceivedAlarmDashboard';
import UserPerCountryDashboard from './components/Dashboard/UserPerCountryDashboard';
import AdminProfileDashboard from './components/Dashboard/AdminProfileDashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin-manager' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/user-app-installed' element={<UserAppInstalledDashboard></UserAppInstalledDashboard>}></Route>
          <Route path='/user-have-guardian' element={<UserHaveGuardianDashboard></UserHaveGuardianDashboard>}></Route>
          <Route path='/number-of-guardian' element={<NumberOfGuardianDashboard></NumberOfGuardianDashboard>}></Route>
          <Route path='/user-connect-safe' element={<UserConnectSafeDashboard></UserConnectSafeDashboard>}></Route>
          <Route path='/user-last-week-activity' element={<UserLastWeekActivityDashboard></UserLastWeekActivityDashboard>}></Route>
          <Route path='/send-out-alarm' element={<SendOutAlarmDashboard></SendOutAlarmDashboard>}></Route>
          <Route path='/received-alarm' element={<ReceivedAlarmDashboard></ReceivedAlarmDashboard>}></Route>
          <Route path='/user-per-country' element={<UserPerCountryDashboard></UserPerCountryDashboard>}></Route>
          <Route path='/edit-profile' element={<AdminProfileDashboard></AdminProfileDashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
