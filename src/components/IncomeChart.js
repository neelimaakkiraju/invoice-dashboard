import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

const data = [
  { month: "Jan", income: 3500, momGrowth: 0 },
  { month: "Feb", income: 5000, momGrowth: 25 },
  { month: "Mar", income: 7000, momGrowth: 35 },
  { month: "Apr", income: 3000, momGrowth: -45 },
  { month: "May", income: 5000, momGrowth: 50 },
  { month: "Jun", income: 0, momGrowth: -100 },
];

export default function IncomeChart() {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-gray-700">Income Trend</h2>
      <p className="text-sm text-gray-500 mb-6">
        Your monthly income and growth for the last 6 months.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickFormatter={(value) => `$${value}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "12px",
            }}
            formatter={(value, name) => {
              if (name === "income") return [`$${value}k`, "Income"];
              return [`${value}%`, "MoM Growth"];
            }}
          />
          <Legend />
          <Bar
            dataKey="income"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
            yAxisId="left"
            name="income"
          />
          <Line
            type="monotone"
            dataKey="momGrowth"
            stroke="#991b1b"
            strokeWidth={2}
            yAxisId="right"
            name="momGrowth"
            dot={{ fill: "#991b1b", r: 4 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
