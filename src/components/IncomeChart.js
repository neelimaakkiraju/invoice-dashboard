import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 4000, growth: 2400 },
  { month: "Feb", income: 5000, growth: 3000 },
  { month: "Mar", income: 7000, growth: 4000 },
  { month: "Apr", income: 4500, growth: 2500 },
  { month: "May", income: 6500, growth: 3500 },
  { month: "Jun", income: 5000, growth: 3000 },
];

export default function IncomeChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-2">Income Trend</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your monthly income and growth for the last 6 months.
      </p>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#8b5cf6" />
          <Bar dataKey="growth" fill="#c4b5fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
