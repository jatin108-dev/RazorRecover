import {
  LayoutDashboard,
  CreditCard,
  Users,
  Bot,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Payments", icon: CreditCard },
  { name: "Customers", icon: Users },
  { name: "AI Agent", icon: Bot },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

function Sidebar({ isOpen, onClose, activePage, onNavigate }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static
          inset-y-0 left-0
          z-50
          w-[245px]
          bg-[#11101f]
          text-white
          flex flex-col
          min-h-screen
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="h-[82px] flex items-center justify-between px-6 border-b border-white/10">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mr-3">
              <span className="font-bold text-lg">R</span>
            </div>

            <div>
              <h1 className="font-bold text-lg leading-none">
                Razor<span className="text-violet-400">Recover</span>
              </h1>

              <p className="text-[10px] text-gray-400 mt-1">
                AI Revenue Recovery
              </p>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-6 space-y-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                onClick={() => onNavigate(item.name)}
                className={`
                  w-full
                  flex items-center gap-3
                  px-4 py-3
                  rounded-xl
                  text-sm
                  transition
                  ${
                    active
                      ? "bg-violet-600 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* AI Status */}
        <div className="m-4 rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-300">
              AI Agent Status
            </span>
          </div>

          <p className="text-sm font-semibold mb-1">
            Active
          </p>

          <p className="text-[11px] text-gray-500 mb-3">
            Monitoring 128 payments
          </p>

          <button
            onClick={() => onNavigate("AI Agent")}
            className="w-full border border-violet-500/50 text-violet-300 text-xs py-2 rounded-lg hover:bg-violet-600/20 transition"
          >
            View Agent
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;