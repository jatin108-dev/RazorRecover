import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  IndianRupee,
  Target,
  TrendingUp,
} from "lucide-react";

const recoveryData = [
  { day: "Mon", recovered: 42, risk: 68 },
  { day: "Tue", recovered: 58, risk: 72 },
  { day: "Wed", recovered: 51, risk: 61 },
  { day: "Thu", recovered: 74, risk: 82 },
  { day: "Fri", recovered: 68, risk: 76 },
  { day: "Sat", recovered: 88, risk: 69 },
  { day: "Sun", recovered: 96, risk: 64 },
];

const channels = [
  {
    name: "WhatsApp",
    recovered: "₹3.84L",
    rate: "68.4%",
    width: "84%",
  },
  {
    name: "Payment Link",
    recovered: "₹2.71L",
    rate: "57.8%",
    width: "71%",
  },
  {
    name: "Email",
    recovered: "₹1.42L",
    rate: "41.6%",
    width: "52%",
  },
  {
    name: "Auto Retry",
    recovered: "₹45K",
    rate: "31.2%",
    width: "39%",
  },
];

function Analytics() {
  const maxValue = 100;

  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
            Analytics
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Measure how much revenue RazorRecover is saving.
          </p>
        </div>

        <select className="w-full sm:w-auto border border-gray-200 bg-white rounded-lg px-3 py-2.5 text-xs outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mb-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Revenue Recovered
            </p>

            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <IndianRupee size={15} />
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-green-600 mt-3">
            ₹8.42L
          </p>

          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight size={12} className="text-green-600" />
            <span className="text-[10px] text-green-600 font-semibold">
              18.4%
            </span>
            <span className="text-[10px] text-gray-400">
              vs last month
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Recovery Rate
            </p>

            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
              <Target size={15} />
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-violet-600 mt-3">
            64.8%
          </p>

          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight size={12} className="text-green-600" />
            <span className="text-[10px] text-green-600 font-semibold">
              7.2%
            </span>
            <span className="text-[10px] text-gray-400">
              improvement
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Successful Actions
            </p>

            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <CheckCircle2 size={15} />
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold mt-3">
            326
          </p>

          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight size={12} className="text-green-600" />
            <span className="text-[10px] text-green-600 font-semibold">
              12.8%
            </span>
            <span className="text-[10px] text-gray-400">
              this month
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Avoided Revenue Loss
            </p>

            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <TrendingUp size={15} />
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-bold mt-3">
            ₹12.7L
          </p>

          <div className="flex items-center gap-1 mt-1">
            <ArrowDownRight size={12} className="text-red-500" />
            <span className="text-[10px] text-red-500 font-semibold">
              3.1%
            </span>
            <span className="text-[10px] text-gray-400">
              failed revenue
            </span>
          </div>
        </div>

      </div>

      {/* Main chart */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">

            <div>
              <h3 className="font-semibold text-gray-900">
                Recovery Performance
              </h3>

              <p className="text-[11px] text-gray-400 mt-1">
                Revenue recovered compared with revenue at risk
              </p>
            </div>

            <div className="flex gap-4 text-[10px] text-gray-500">

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Recovered
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                At Risk
              </div>

            </div>

          </div>

          {/* Chart */}
          <div className="h-[260px] relative">

            {/* Grid */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((line) => (
                <div
                  key={line}
                  className="border-t border-gray-100 w-full"
                />
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-around px-2 sm:px-6">

              {recoveryData.map((item) => (
                <div
                  key={item.day}
                  className="h-full flex items-end gap-1 sm:gap-2"
                >
                  <div
                    className="w-3 sm:w-5 bg-green-400 rounded-t-md"
                    style={{
                      height: `${(item.recovered / maxValue) * 85}%`,
                    }}
                  />

                  <div
                    className="w-3 sm:w-5 bg-red-300 rounded-t-md"
                    style={{
                      height: `${(item.risk / maxValue) * 85}%`,
                    }}
                  />
                </div>
              ))}

            </div>

            {/* Labels */}
            <div className="absolute -bottom-5 left-0 right-0 flex justify-around px-2 sm:px-6">
              {recoveryData.map((item) => (
                <span
                  key={item.day}
                  className="text-[10px] text-gray-400"
                >
                  {item.day}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* AI performance */}
        <div className="bg-[#11101f] text-white rounded-2xl p-5 sm:p-6">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
              <BarChart3 size={18} />
            </div>

            <div>
              <h3 className="font-semibold">
                AI Performance
              </h3>

              <p className="text-[10px] text-gray-500">
                Agent effectiveness
              </p>
            </div>

          </div>

          <div className="mt-7">

            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold">
                  91.6%
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  Decision accuracy
                </p>
              </div>

              <span className="text-[10px] text-green-400">
                +4.8%
              </span>
            </div>

            <div className="h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full"
                style={{ width: "91.6%" }}
              />
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3 mt-7">

            <div className="bg-white/5 rounded-xl p-3">
              <p className="text-[10px] text-gray-500">
                Decisions
              </p>

              <p className="text-lg font-bold mt-1">
                326
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-3">
              <p className="text-[10px] text-gray-500">
                Success
              </p>

              <p className="text-lg font-bold text-green-400 mt-1">
                87%
              </p>
            </div>

          </div>

          <div className="mt-6 border-t border-white/10 pt-5">

            <p className="text-[10px] text-gray-500">
              AI recommendation
            </p>

            <p className="text-xs text-gray-300 mt-2 leading-5">
              WhatsApp recovery currently performs best for
              high-value failed UPI payments. Consider prioritizing
              this channel for similar customers.
            </p>

          </div>

        </div>

      </div>

      {/* Channel performance */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900">
            Recovery Channel Performance
          </h3>

          <p className="text-[11px] text-gray-400 mt-1">
            Revenue recovered by AI-selected recovery channel
          </p>
        </div>

        <div className="space-y-5">

          {channels.map((channel) => (
            <div key={channel.name}>

              <div className="flex items-center justify-between mb-2">

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    {channel.name}
                  </p>

                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {channel.recovered} recovered
                  </p>
                </div>

                <span className="text-xs font-semibold text-violet-600">
                  {channel.rate}
                </span>

              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 rounded-full"
                  style={{ width: channel.width }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Insight */}
      <div className="mt-5 bg-violet-50 border border-violet-100 rounded-2xl p-4 sm:p-5">

        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
            <TrendingUp size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Analytics Insight
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-5">
              AI-driven recovery has improved recovered revenue by
              18.4%. High-value UPI failures are currently the
              strongest recovery opportunity.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Analytics;