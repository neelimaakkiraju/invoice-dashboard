import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import IncomeChart from "../components/IncomeChart";
import InvoiceCard from "../components/InvoiceCard";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="p-4 space-y-6">
        {/* Create Invoice */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-600">
            + Create New Invoice
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Or upload an existing invoice and set payment reminder
          </p>
        </div>

        {/* Time Period */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-600 mb-4">Time Period</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-lg border hover:bg-gray-50">
              1Month
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-lg bg-purple-100 text-purple-600 border-purple-200 border">
              3Months
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center justify-center gap-2">
              1Year
              <span className="text-purple-600">👑</span>
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Custom
            </button>
          </div>
          <div className="mt-4 text-gray-400 text-sm text-center sm:text-left">
            dd:mm:yyyy - dd:mm:yyyy
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard title="Total Earnings" amount="$125,000" />
          <StatsCard title="Payment Awaited" amount="$25,000" />
          <StatsCard title="Payment Overdue" amount="$25,000" />
          <StatsCard title="Invoices Sent" amount="12" />
        </div>

        {/* Chart */}
        <IncomeChart />

        {/* Invoices */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Your Invoices</h2>
          <InvoiceCard
            client="Client A"
            amount="25,000"
            dueDate="2024-06-15"
            status="Pending"
          />
          <InvoiceCard
            client="Client B"
            amount="50,000"
            dueDate="2024-07-20"
            status="Paid"
          />
          <InvoiceCard
            client="Client C"
            amount="30,000"
            dueDate="2024-08-10"
            status="Overdue"
          />
        </div>
      </div>
    </div>
  );
}
