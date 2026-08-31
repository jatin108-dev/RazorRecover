import { useState } from "react";
import {
  Bell,
  Menu,
  Search,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Topbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Generate initials automatically
  const getInitials = (name = "") => {
    const parts = name.trim().split(/\s+/).filter(Boolean);

    if (parts.length === 0) return "M";

    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }

    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  };

  const displayName = user?.name || "Merchant";
  const initials = getInitials(displayName);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await logout();

      setMenuOpen(false);

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header className="h-[72px] sm:h-[82px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">

      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0">

        {/* Mobile menu */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 shrink-0"
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>

        <div className="min-w-0">
          <h2 className="font-semibold text-base sm:text-lg truncate">
            Dashboard
          </h2>

          <p className="text-[10px] sm:text-xs text-gray-400 truncate">
            AI-powered revenue recovery
          </p>
        </div>

      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">

          <Search size={15} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-28 lg:w-40"
          />

        </div>


        {/* Notifications */}
        <button
          className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>


        {/* USER MENU */}
        <div className="relative">

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl px-1.5 py-1 transition hover:bg-gray-50"
          >

            {/* Initials */}
            <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-semibold text-xs">
              {initials}
            </div>

            {/* Name */}
            <div className="hidden sm:block text-left max-w-[150px]">

              <p className="text-xs font-semibold text-gray-800 truncate">
                {displayName}
              </p>

              <p className="text-[10px] text-gray-400 truncate">
                {user?.email || "Merchant account"}
              </p>

            </div>

            <ChevronDown
              size={14}
              className={`hidden sm:block text-gray-400 transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
            />

          </button>


          {/* DROPDOWN */}
          {menuOpen && (
            <div className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/50">

              {/* Account info */}
              <div className="px-3 py-3 border-b border-gray-100">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-semibold text-xs">
                    {initials}
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-semibold text-gray-800 truncate">
                      {displayName}
                    </p>

                    <p className="text-[10px] text-gray-400 truncate">
                      {user?.email}
                    </p>

                  </div>

                </div>

              </div>


              {/* Profile */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/settings");
                }}
                className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <User size={15} />
                Account settings
              </button>


              {/* Logout */}
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-red-500 hover:bg-red-50 disabled:opacity-50"
              >
                <LogOut size={15} />

                {loggingOut ? "Signing out..." : "Logout"}
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default Topbar;