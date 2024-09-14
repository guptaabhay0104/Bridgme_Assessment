
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import EmployeeManagementPage from './pages/EmployeeManagementPage';
import PayrollManagementPage from './pages/PayrollManagementPage';
import RecruitmentManagementPage from './pages/RecruitmentManagementPage';
import EmployeePerformancePage from './pages/EmployeePerformancePage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/employee-management" element={<EmployeeManagementPage />} />
              <Route path="/payroll-management" element={<PayrollManagementPage />} />
              <Route path="/recruitment-management" element={<RecruitmentManagementPage />} />
              <Route path="/employee-performance" element={<EmployeePerformancePage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
