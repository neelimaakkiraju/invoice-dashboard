import React from "react";
import { CgBell } from "react-icons/cg";
import { LuPencil } from "react-icons/lu";


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
        <h3 className="text-[#6B7280] text-sm font-semibold">{client}</h3>
        <p className="text-gray-400 text-xs">
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
          <CgBell className="text-gray-400 h-5 w-5" />
        )}
        {showPencil && (
          <LuPencil  className="text-gray-400"/>
        )}
      </div>
    </div>
  );
}
