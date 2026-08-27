import { ArrowUpRight } from "lucide-react";

function RecoveryTable({ opportunities = [] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <h3 className="font-semibold text-gray-900">
            Top Recovery Opportunities
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Payments where AI sees the highest recovery potential
          </p>
        </div>

        <button className="text-xs text-violet-600 font-semibold hover:text-violet-700 self-start sm:self-auto">
          View All
        </button>
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Failure</th>
              <th className="pb-3 font-medium">Recovery Score</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {opportunities.map((item) => (
              <tr
                key={`${item.name}-${item.amount}`}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="py-4 font-medium text-gray-800">
                  {item.name}
                </td>

                <td className="py-4 text-gray-700">
                  {item.amount}
                </td>

                <td className="py-4 text-gray-500">
                  {item.reason}
                </td>

                <td className="py-4">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                    {item.score}
                  </span>
                </td>

                <td className="py-4">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium rounded-lg transition">
                    Recover
                    <ArrowUpRight size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {opportunities.map((item) => (
          <div
            key={`${item.name}-${item.amount}`}
            className="border border-gray-100 rounded-xl p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.name}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {item.reason}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                {item.score}
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-gray-900">
                {item.amount}
              </p>

              <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium rounded-lg">
                Recover
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecoveryTable;