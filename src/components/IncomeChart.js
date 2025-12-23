import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function IncomeChart({ data, range, onRangeChange }) {
  const ranges = ["3M", "6M", "12M"];

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Income Trend</h2>
          <p className="text-sm text-slate-500">
            Monthly billables vs. collections over your selected range.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {ranges.map((option) => (
            <button
              key={option}
              onClick={() => onRangeChange(option)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                range === option
                  ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-purple-200 hover:text-purple-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 0, top: 10 }}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="collected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fb7185" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#fb7185" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(val) => `₹${(val / 1000).toFixed(0)}k`}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                borderColor: "#E5E7EB",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08), 0 6px 10px rgba(0,0,0,0.04)",
              }}
              formatter={(value) => `₹${value.toLocaleString("en-IN")}`}
            />
            <Area
              type="monotone"
              dataKey="billed"
              stroke="#a855f7"
              strokeWidth={2}
              fill="url(#income)"
              name="Billed"
            />
            <Area
              type="monotone"
              dataKey="collected"
              stroke="#fb7185"
              strokeWidth={2}
              fill="url(#collected)"
              name="Collected"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
