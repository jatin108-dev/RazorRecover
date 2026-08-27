import {
  CheckCircle2,
  Clock3,
  ShieldAlert,
  Bell,
} from "lucide-react";

const iconMap = {
  success: CheckCircle2,
  info: Clock3,
  danger: ShieldAlert,
  warning: Bell,
};

const styleMap = {
  success: "bg-green-50 text-green-600",
  info: "bg-violet-50 text-violet-600",
  danger: "bg-red-50 text-red-600",
  warning: "bg-orange-50 text-orange-600",
};

function ActivityCard({ activity }) {
  const Icon = iconMap[activity.type] || Clock3;
  const iconStyle = styleMap[activity.type] || styleMap.info;

  return (
    <div className="flex gap-3">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconStyle}`}
      >
        <Icon size={16} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-semibold text-gray-800 leading-4">
            {activity.title}
          </p>

          <span className="text-[10px] text-gray-400 whitespace-nowrap">
            {activity.time}
          </span>
        </div>

        <p className="text-[11px] text-gray-400 mt-1 truncate">
          {activity.detail}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;