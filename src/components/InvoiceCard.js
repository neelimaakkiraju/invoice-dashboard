import React from "react";
import { CgBell } from "react-icons/cg";
import { LuPencil } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

const statusStyles = {
  Paid: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  "Partially Paid": "bg-blue-50 text-blue-700 border border-blue-100",
  Awaited: "bg-amber-50 text-amber-700 border border-amber-100",
  Overdue: "bg-rose-50 text-rose-700 border border-rose-100",
  Disputed: "bg-orange-50 text-orange-700 border border-orange-100",
  Draft: "bg-slate-100 text-slate-600 border border-slate-200",
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function InvoiceCard({
  client,
  amount,
  dueDate,
  status,
  invoiceId,
  project,
  priority,
}) {
  const showBell = status === "Overdue" || status === "Awaited";
  const showPencil = status === "Draft";
  const pillStyle = statusStyles[status] || "bg-purple-50 text-purple-700";
  const formattedAmount =
    typeof amount === "number"
      ? amount.toLocaleString("en-IN")
      : amount;

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900">{client}</h3>
            <span className="text-[11px] text-slate-500">• {invoiceId}</span>
          </div>
          {project && <p className="text-xs text-slate-500">{project}</p>}
          <p className="text-xs text-slate-500 mt-1">
            Due {formatDate(dueDate)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${pillStyle}`}>
            {status}
          </span>
          {showBell && <CgBell className="text-slate-400 h-5 w-5" />}
          {showPencil && <LuPencil className="text-slate-400 h-5 w-5" />}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">₹{formattedAmount}</span>
          {priority && (
            <span className="px-2 py-1 text-[11px] rounded-full bg-slate-100 text-slate-600">
              {priority} priority
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs font-semibold text-purple-700 flex items-center gap-1 hover:underline">
            View details <FiArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
