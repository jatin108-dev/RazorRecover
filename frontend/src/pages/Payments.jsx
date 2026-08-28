import {
  CheckCircle2,
  Clock3,
  CreditCard,
  Search,
  ShieldAlert,
} from "lucide-react";

import { payments } from "../data/mockData";

function StatusBadge({ status }) {
  const styles = {
    Success: "bg-green-50 text-green-600",
    Failed: "bg-red-50 text-red-600",
    "At Risk": "bg-orange-50 text-orange-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
        styles[status] || "bg-gray-50 text-gray-600"
      }`}
    >
      {status === "Success" && <CheckCircle2 size={12} />}
      {status === "Failed" && <ShieldAlert size={12} />}
      {status === "At Risk" && <Clock3 size={12} />}

      {status}
    </span>
  );
}

function ScoreBadge({ score }) {
  if (!score) {
    return <span className="text-gray-300">—</span>;
  }

  const scoreStyle =
    score >= 80
      ? "bg-green-50 text-green-600"
      : score >= 70
      ? "bg-yellow-50 text-yellow-600"
      : "bg-orange-50 text-orange-600";

  return (
    <span
      className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold ${scoreStyle}`}
    >
      {score}%
    </span>
  );
}

function Payments() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
          Payments
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Monitor payment failures and recovery opportunities.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mb-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Total Payments</p>
          <p className="text-xl sm:text-2xl font-bold mt-2">1,284</p>
          <p className="text-[11px] text-gray-400 mt-1">
            This month
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Successful</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600 mt-2">
            1,071
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            83.4% success rate
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">Failed</p>
          <p className="text-xl sm:text-2xl font-bold text-red-500 mt-2">
            190
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            Need attention
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs text-gray-400">At Risk</p>
          <p className="text-xl sm:text-2xl font-bold text-orange-500 mt-2">
            23
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            High recovery potential
          </p>
        </div>

      </div>

      {/* Payments panel */}
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
              placeholder="Search payments..."
              className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-lg outline-none focus:border-violet-400"
            />
          </div>

          <div className="flex gap-2">
            <button className="px-3 py-2 text-xs border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              All
            </button>

            <button className="px-3 py-2 text-xs border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              Failed
            </button>

            <button className="px-3 py-2 text-xs border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              At Risk
            </button>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">

            <thead>
              <tr className="text-left text-[11px] text-gray-400 border-b border-gray-100">
                <th className="px-5 py-3 font-medium">Payment</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Method</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">AI Score</th>
                <th className="px-5 py-3 font-medium">Date</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/70"
                >
                  <td className="px-5 py-4">
                    <p className="text-xs font-semibold text-gray-800">
                      {payment.id}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">
                      {payment.reason}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-xs font-medium text-gray-800">
                      {payment.customer}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">
                      {payment.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 font-semibold text-gray-800">
                    {payment.amount}
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-500">
                    {payment.method}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={payment.status} />
                  </td>

                  <td className="px-5 py-4">
                    <ScoreBadge score={payment.recoveryScore} />
                  </td>

                  <td className="px-5 py-4 text-[11px] text-gray-400">
                    {payment.date}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden p-3 space-y-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="border border-gray-100 rounded-xl p-4"
            >
              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-800">
                    {payment.customer}
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    {payment.id}
                  </p>
                </div>

                <StatusBadge status={payment.status} />

              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">

                <div>
                  <p className="text-[10px] text-gray-400">
                    Amount
                  </p>

                  <p className="text-sm font-bold mt-1">
                    {payment.amount}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    AI Recovery Score
                  </p>

                  <div className="mt-1">
                    <ScoreBadge score={payment.recoveryScore} />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    Method
                  </p>

                  <p className="text-xs font-medium mt-1">
                    {payment.method}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">
                    Failure Reason
                  </p>

                  <p className="text-xs font-medium mt-1">
                    {payment.reason}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                <CreditCard size={12} />
                {payment.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Payments;