import React from "react";

export default function StatsCard({
  title,
  amount,
  subtitle,
  delta,
  trend = "up",
  className = "",
}) {
  const deltaColor =
    trend === "up"
      ? "text-emerald-700 bg-emerald-50 border-emerald-100"
      : "text-rose-700 bg-rose-50 border-rose-100";

  return (
    <div
      className={`rounded-2xl p-5 w-full bg-white shadow-sm ring-1 ring-slate-100 ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-slate-500">{title}</p>
          <h2 className="text-lg font-semibold mt-1 text-slate-900">{amount}</h2>
        </div>
        {delta && (
          <span
            className={`text-[11px] font-semibold px-2 py-1 rounded-full border ${deltaColor}`}
          >
            {delta}
          </span>
        )}
      </div>
      {subtitle && <p className="text-xs text-slate-500 mt-3">{subtitle}</p>}
    </div>
  );
}
