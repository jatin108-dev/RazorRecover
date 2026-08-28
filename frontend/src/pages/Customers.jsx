import {
  Search,
  UserRound,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const customers = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    payments: 8,
    failed: 2,
    recovered: "₹4,998",
    risk: "High",
    lastPayment: "₹2,499",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    payments: 12,
    failed: 1,
    recovered: "₹8,499",
    risk: "Medium",
    lastPayment: "₹4,999",
  },
  {
    name: "Aman Gupta",
    email: "aman@example.com",
    payments: 5,
    failed: 2,
    recovered: "₹1,799",
    risk: "High",
    lastPayment: "₹899",
  },
  {
    name: "Neha Verma",
    email: "neha@example.com",
    payments: 15,
    failed: 0,
    recovered: "₹12,499",
    risk: "Low",
    lastPayment: "₹1,299",
  },
  {
    name: "Arjun Mehta",
    email: "arjun@example.com",
    payments: 7,
    failed: 1,
    recovered: "₹3,499",
    risk: "Medium",
    lastPayment: "₹3,499",
  },
];

function RiskBadge({ risk }) {
  const styles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-orange-50 text-orange-600",
    Low: "bg-green-50 text-green-600",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
        styles[risk]
      }`}
    >
      {risk}
    </span>
  );
}

function Customers() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
          Customers
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Understand customer payment behaviour and recovery history.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mb-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Total Customers</p>
          <p className="text-xl sm:text-2xl font-bold mt-2">842</p>
          <p className="text-[11px] text-green-600 mt-1">
            +8.2% this month
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">High Risk</p>
          <p className="text-xl sm:text-2xl font-bold text-red-500 mt-2">
            47
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Need attention
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Recovered Customers</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600 mt-2">
            326
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Through AI recovery
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Recovery Revenue</p>
          <p className="text-xl sm:text-2xl font-bold text-violet-600 mt-2">
            ₹8.42L
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Generated this month
          </p>
        </div>

      </div>

      {/* Customer panel */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        {/* Toolbar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-lg outline-none focus:border-violet-400"
            />
          </div>

          <button className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50">
            Export Customers
          </button>

        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="text-left text-[11px] text-gray-400 border-b border-gray-100">

                <th className="px-5 py-3 font-medium">
                  Customer
                </th>

                <th className="px-5 py-3 font-medium">
                  Payments
                </th>

                <th className="px-5 py-3 font-medium">
                  Failed
                </th>

                <th className="px-5 py-3 font-medium">
                  Recovered
                </th>

                <th className="px-5 py-3 font-medium">
                  Risk
                </th>

                <th className="px-5 py-3 font-medium">
                  Last Payment
                </th>

                <th className="px-5 py-3 font-medium">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {customers.map((customer) => (
                <tr
                  key={customer.email}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/70"
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
                        <UserRound size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-800">
                          {customer.name}
                        </p>

                        <p className="text-[10px] text-gray-400 mt-1">
                          {customer.email}
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="px-5 py-4 text-xs text-gray-600">
                    {customer.payments}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`text-xs font-semibold ${
                        customer.failed > 0
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {customer.failed}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-xs font-semibold text-green-600">
                    {customer.recovered}
                  </td>

                  <td className="px-5 py-4">
                    <RiskBadge risk={customer.risk} />
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-600">
                    {customer.lastPayment}
                  </td>

                  <td className="px-5 py-4">

                    <button className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-700">
                      View
                      <ArrowUpRight size={12} />
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile cards */}
        <div className="md:hidden p-3 space-y-3">

          {customers.map((customer) => (
            <div
              key={customer.email}
              className="border border-gray-100 rounded-xl p-4"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3 min-w-0">

                  <div className="w-9 h-9 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <UserRound size={16} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-800">
                      {customer.name}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1 truncate">
                      {customer.email}
                    </p>
                  </div>

                </div>

                <RiskBadge risk={customer.risk} />

              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">

                <div>
                  <p className="text-[10px] text-gray-400">
                    Total Payments
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    {customer.payments}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    Failed
                  </p>

                  <p
                    className={`text-sm font-semibold mt-1 ${
                      customer.failed
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {customer.failed}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    Recovered
                  </p>

                  <p className="text-sm font-semibold text-green-600 mt-1">
                    {customer.recovered}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    Last Payment
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    {customer.lastPayment}
                  </p>
                </div>

              </div>

              <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-xs font-medium text-violet-600 flex items-center justify-center gap-1 hover:bg-violet-50">
                View Customer
                <ArrowUpRight size={12} />
              </button>

            </div>
          ))}

        </div>

      </div>

      {/* AI note */}
      <div className="mt-5 bg-violet-50 border border-violet-100 rounded-2xl p-4 sm:p-5">

        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
            <AlertCircle size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              AI Customer Intelligence
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-5">
              RazorRecover analyzes previous payment behaviour to
              identify customers who are more likely to recover after
              a failed payment.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Customers;