import {
  LayoutDashboard,
  CreditCard,
  Users,
  Bot,
  BarChart3,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  ShieldAlert,
  CheckCircle2,
  Clock3,
  ChevronDown,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Payments", icon: CreditCard },
  { name: "Customers", icon: Users },
  { name: "AI Agent", icon: Bot },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

const activities = [
  {
    title: "Payment recovered successfully",
    detail: "₹2,499 from Rahul Sharma",
    time: "2 min ago",
    icon: CheckCircle2,
    type: "success",
  },
  {
    title: "Recovery initiated",
    detail: "Payment link sent to Aman Gupta",
    time: "5 min ago",
    icon: Clock3,
    type: "info",
  },
  {
    title: "High risk payment detected",
    detail: "₹4,999 from Priya Singh",
    time: "8 min ago",
    icon: ShieldAlert,
    type: "danger",
  },
  {
    title: "Reminder sent",
    detail: "Follow-up sent to Neha Verma",
    time: "12 min ago",
    icon: Bell,
    type: "warning",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f7f7fa] text-[#17152b] flex">

      {/* SIDEBAR */}
      <aside className="w-[245px] bg-[#11101f] text-white min-h-screen flex flex-col">

        {/* LOGO */}
        <div className="h-[82px] flex items-center px-6 border-b border-white/10">
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

        {/* NAVIGATION */}
        <nav className="px-3 py-6 space-y-1 flex-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;

            return (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                  active
                    ? "bg-violet-600 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* AI STATUS */}
        <div className="m-4 rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-xs text-gray-300">AI Agent Status</span>
          </div>

          <p className="text-sm font-semibold mb-1">● Active</p>

          <p className="text-[11px] text-gray-500 mb-3">
            Monitoring 128 payments
          </p>

          <button className="w-full border border-violet-500/50 text-violet-300 text-xs py-2 rounded-lg hover:bg-violet-600/20">
            View Agent
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0">

        {/* TOPBAR */}
        <header className="h-[82px] bg-white border-b border-gray-200 flex items-center justify-between px-8">

          <div>
            <h2 className="font-semibold text-lg">Dashboard</h2>
            <p className="text-xs text-gray-400">
              AI-powered revenue recovery
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* SEARCH */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
              <Search size={15} className="text-gray-400" />
              <input
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            <button className="relative text-gray-500">
              <Bell size={19} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-semibold text-sm">
                JD
              </div>

              <div className="hidden sm:block">
                <p className="text-xs font-semibold">JD Merchant</p>
                <p className="text-[10px] text-gray-400">Merchant ID: MR2345</p>
              </div>

              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="p-8">

          {/* GREETING */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold">
              Good morning, JD 👋
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Here's your recovery overview
            </p>
          </div>

          {/* KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">

            <StatCard
              title="Total Revenue"
              value="₹8,45,230"
              change="+18.6%"
              positive
              icon={ArrowUpRight}
            />

            <StatCard
              title="Revenue At Risk"
              value="₹2,12,450"
              change="23 payments"
              icon={ShieldAlert}
              danger
            />

            <StatCard
              title="Recovered Revenue"
              value="₹74,350"
              change="+32.4%"
              positive
              icon={CheckCircle2}
            />

            <StatCard
              title="Recovery Rate"
              value="35.06%"
              change="+8.7%"
              positive
              icon={BarChart3}
            />

          </div>

          {/* CHART + ACTIVITY */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

            {/* CHART */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold">Revenue Recovery Trend</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Recovered vs revenue at risk
                  </p>
                </div>

                <select className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>

              {/* SIMPLE CHART */}
              <div className="h-[250px] relative">

                <div className="absolute inset-0 flex flex-col justify-between">
                  {[120, 90, 60, 30, 0].map((value) => (
                    <div
                      key={value}
                      className="border-t border-gray-100 w-full"
                    />
                  ))}
                </div>

                <svg
                  viewBox="0 0 700 240"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,180 100,145 200,160 300,110 400,125 500,70 600,90 700,45"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                  />

                  <polyline
                    points="0,210 100,190 200,195 300,170 400,185 500,145 600,155 700,125"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="flex gap-5 text-xs mt-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  Recovered
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  At Risk
                </div>
              </div>
            </div>

            {/* AI ACTIVITY */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">

              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold">AI Recovery Activity</h3>

                <button className="text-xs text-violet-600 font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-5">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.title}
                      className="flex gap-3"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          activity.type === "success"
                            ? "bg-green-50 text-green-600"
                            : activity.type === "danger"
                            ? "bg-red-50 text-red-600"
                            : activity.type === "warning"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-violet-50 text-violet-600"
                        }`}
                      >
                        <Icon size={16} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <p className="text-xs font-semibold">
                            {activity.title}
                          </p>

                          <span className="text-[10px] text-gray-400 whitespace-nowrap">
                            {activity.time}
                          </span>
                        </div>

                        <p className="text-[11px] text-gray-400 mt-1">
                          {activity.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RECOVERY OPPORTUNITIES */}
          <div className="mt-5 bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex justify-between items-center mb-5">
              <div>
                <h3 className="font-semibold">Top Recovery Opportunities</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Payments where AI sees the highest recovery potential
                </p>
              </div>

              <button className="text-xs text-violet-600 font-medium">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-400 border-b">
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Failure</th>
                    <th className="pb-3">Recovery Score</th>
                    <th className="pb-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <Opportunity
                    name="Rahul Sharma"
                    amount="₹2,499"
                    reason="UPI Timeout"
                    score="82%"
                  />

                  <Opportunity
                    name="Priya Singh"
                    amount="₹4,999"
                    reason="Bank Error"
                    score="76%"
                  />

                  <Opportunity
                    name="Aman Gupta"
                    amount="₹899"
                    reason="Card Declined"
                    score="68%"
                  />
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

function StatCard({ title, value, change, positive, danger, icon: Icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs text-gray-400">{title}</p>

          <p className="text-2xl font-bold mt-2">
            {value}
          </p>

          <div className="flex items-center gap-1 mt-2">
            {positive && (
              <ArrowUpRight size={13} className="text-green-500" />
            )}

            <span
              className={`text-[11px] font-medium ${
                danger
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {change}
            </span>

            {!danger && (
              <span className="text-[10px] text-gray-400">
                vs last 7 days
              </span>
            )}
          </div>
        </div>

        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${
            danger
              ? "bg-red-50 text-red-500"
              : "bg-violet-50 text-violet-600"
          }`}
        >
          <Icon size={17} />
        </div>

      </div>
    </div>
  );
}

function Opportunity({ name, amount, reason, score }) {
  return (
    <tr className="border-b last:border-0">

      <td className="py-4 font-medium">
        {name}
      </td>

      <td className="py-4">
        {amount}
      </td>

      <td className="py-4 text-gray-500">
        {reason}
      </td>

      <td className="py-4">
        <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
          {score}
        </span>
      </td>

      <td className="py-4">
        <button className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs rounded-lg">
          Recover
        </button>
      </td>

    </tr>
  );
}

export default App;