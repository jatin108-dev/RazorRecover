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

      <Route
  path="*"
  element={
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7fa]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-sm text-gray-500">
          Page not found
        </p>
      </div>
    </div>
  }
/>

    </Routes>
  );
}

export default App;