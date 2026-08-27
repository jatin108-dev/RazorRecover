import { Bell, Menu, Search, ChevronDown } from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <header className="h-[72px] sm:h-[82px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
      
      {/* Left */}
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

      {/* Right */}
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

        {/* User */}
        <button className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-semibold text-xs">
            JD
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-gray-800">
              JD Merchant
            </p>

            <p className="text-[10px] text-gray-400">
              Merchant ID: MR2345
            </p>
          </div>

          <ChevronDown
            size={14}
            className="hidden sm:block text-gray-400"
          />
        </button>
      </div>
    </header>
  );
}

export default Topbar;