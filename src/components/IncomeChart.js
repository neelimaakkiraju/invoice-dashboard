import React from "react";

export default function IncomeChart() {
  return (
    <div className="w-full">
      <h2 className="text-md font-semibold text-gray-500">Income Trend</h2>
      <p className="text-sm text-gray-500 mb-6">
        Your monthly income and growth for the last 6 months.
      </p>
      
        <img src="/chart.png" alt="Income chart" className="h-314 w-334"/>
      
    </div>
  );
}
