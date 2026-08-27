import { BarChart3 } from "lucide-react";
import StatCard from "../components/StatCard";
import ActivityCard from "../components/ActivityCard";
import RecoveryTable from "../components/RecoveryTable";
import { activities, recoveryOpportunities, stats } from "../data/mockData";

function Dashboard() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Greeting */}
      <div className="mb-6 sm:mb-7">
        <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
          Good morning 👋
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Here's your recovery overview
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-5 sm:mb-7">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            {...stat}
            type={
              index === 1
                ? "danger"
                : index === 2
                ? "recovered"
                : index === 3
                ? "analytics"
                : "positive"
            }
          />
        ))}
      </div>

      {/* Chart + AI Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Revenue Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">

            <div>
              <h3 className="font-semibold text-gray-900">
                Revenue Recovery Trend
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                Recovered vs revenue at risk
              </p>
            </div>

            <select className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white self-start">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          {/* Chart */}
          <div className="h-[220px] sm:h-[250px] relative">

            <div className="absolute inset-0 flex flex-col justify-between">
              {[1, 2, 3, 4, 5].map((line) => (
                <div
                  key={line}
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

          {/* Legend */}
          <div className="flex gap-5 text-xs mt-3">

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              Recovered
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              At Risk
            </div>

          </div>
        </div>

        {/* AI Activity */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">

          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900">
              AI Recovery Activity
            </h3>

            <button className="text-xs text-violet-600 font-medium">
              View All
            </button>
          </div>

          <div className="space-y-5">
            {activities.map((activity) => (
              <ActivityCard
                key={`${activity.title}-${activity.time}`}
                activity={activity}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recovery Opportunities */}
      <div className="mt-5">
        <RecoveryTable opportunities={recoveryOpportunities} />
      </div>

      {/* AI insight */}
      <div className="mt-5 bg-violet-50 border border-violet-100 rounded-2xl p-4 sm:p-5">
        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
            <BarChart3 size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              AI Insight
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-5">
              Your recovery rate is trending upward. The AI agent
              identified 23 payments with high recovery potential.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Dashboard;