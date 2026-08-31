import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";
import AIAgent from "./pages/AIAgent";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      {/* PROTECTED ROUTES */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Payments />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Customers />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai-agent"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AIAgent />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Analytics />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;