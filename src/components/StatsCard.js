import React from "react";

export default function StatsCard({ title, amount }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-bold mt-2">{amount}</h2>
    </div>
  );
}
