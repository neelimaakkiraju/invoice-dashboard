import React from "react";

export default function InvoiceCard({ client, amount, dueDate, status }) {
  const statusStyles = {
    "Update Status": "bg-purple-600 text-white",
    Unpaid: "bg-gray-100 text-gray-800",
    Disputed: "bg-red-100 text-red-500",
    Paid: "bg-green-100 text-green-800",
    "Partially Paid": "bg-yellow-100 text-yellow-600",
    Overdue: "bg-red-100 text-red-600",
    Awaited: "bg-yellow-100 text-yellow-500",
    Draft: "bg-gray-100 text-gray-500",
  };

  const showBell = status === "Overdue" || status === "Awaited";
  const showPencil = status === "Draft";

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between hover:bg-gray-50 transition-colors border border-[2px]">
      <div>
        <h3 className="text-[#6B7280] text-lg font-semibold">{client}</h3>
        <p className="text-gray-400">
          ₹{amount}, Due: {dueDate}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`px-4 py-1.5 text-sm rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>
        {showBell && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        )}
        {showPencil && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        )}
      </div>
    </div>
  );
}
