import React from "react";

export default function StatsCard({ title, amount, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-sm p-4 w-full ${className}`}>
      <p className="text-sm text-gray-400 sm:text-base md:text-lg">{title}</p>
      <h2 className="text-xl font-bold mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {amount}
      </h2>
    </div>
  );
}
