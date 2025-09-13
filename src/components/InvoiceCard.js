import React from "react";

export default function InvoiceCard({ client, amount, dueDate, status }) {
  const statusColors = {
    Paid: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Overdue: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{client}</h3>
        <p className="text-sm text-gray-500">
          ₹{amount}, Due: {dueDate}
        </p>
      </div>
      <span className={`px-3 py-1 text-sm rounded-lg ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
}
