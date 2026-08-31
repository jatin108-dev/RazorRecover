import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";
import AIAgent from "./pages/AIAgent";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/payments"
        element={
          <DashboardLayout>
            <Payments />
          </DashboardLayout>
        }
      />

      <Route
        path="/customers"
        element={
          <DashboardLayout>
            <Customers />
          </DashboardLayout>
        }
      />

      <Route
        path="/ai-agent"
        element={
          <DashboardLayout>
            <AIAgent />
          </DashboardLayout>
        }
      />

      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        }
      />

      {/* Unknown URL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;