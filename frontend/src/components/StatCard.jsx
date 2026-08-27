import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

const iconMap = {
  positive: ArrowUpRight,
  danger: ShieldAlert,
  recovered: CheckCircle2,
  analytics: BarChart3,
};

function StatCard({ title, value, change, type = "positive", suffix }) {
  const Icon = iconMap[type] || ArrowUpRight;

  const isDanger = type === "danger";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-400">
            {title}
          </p>

          <p className="text-2xl sm:text-[26px] font-bold text-[#17152b] mt-2 truncate">
            {value}
          </p>

          <div className="flex items-center gap-1.5 mt-2">
            <span
              className={`text-[11px] font-semibold ${
                isDanger ? "text-red-500" : "text-green-600"
              }`}
            >
              {change}
            </span>

            {suffix && (
              <span className="text-[10px] text-gray-400">
                {suffix}
              </span>
            )}
          </div>
        </div>

        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            isDanger
              ? "bg-red-50 text-red-500"
              : "bg-violet-50 text-violet-600"
          }`}
        >
          <Icon size={18} />
        </div>

      </div>
    </div>
  );
}

export default StatCard;