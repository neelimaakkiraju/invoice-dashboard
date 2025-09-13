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
        <div className="bg-[#F2F2F2] rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Create New Invoice
            </h2>
            <p className="text-[#999999]">
              Start by creating and sending new invoice
            </p>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12 opacity-50"></div>
        </div>
        <p className="text-sm text-purple-500 mt-4 hover:text-pink-600 cursor-pointer transition-colors text-center">
          Or Upload an existing invoice and set payment reminder
        </p>
        {/* Time Period */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-[2px]">
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-lg font-semibold text-gray-400">Time Period</h2>
            <div className="text-gray-400 text-md text-center sm:text-left">
              dd:mm:yyyy - dd:mm:yyyy
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-gray-400">
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-xl border border-[1px] hover:bg-purple-50 hover:border-purple-200 transition-colors">
              1 Month
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-pink-50 border border-[1px] text-purple-600">
              3 Months
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-xl border border-[1px] hover:bg-purple-50 hover:border-purple-200 transition-colors flex items-center justify-center gap-2">
              1 Year
              <span className="text-pink-500">👑</span>
            </button>
            <button className="flex-1 min-w-[100px] px-4 py-2 rounded-xl border border-[1px] hover:bg-purple-50 hover:border-purple-200 transition-colors flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-500"
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <StatsCard
            title="Total Earnings"
            amount="$125,000"
            className="border border-[2px]"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <StatsCard
            title="Payment Awaited"
            amount="$25,000"
            className="border border-[2px]"
          />
          <StatsCard
            title="Payment Overdue"
            amount="$25,000"
            className="border border-[2px]"
          />
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-[2px]">
          <IncomeChart />
        </div>

        {/* Invoices */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-400">
              Your Invoices
            </h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <InvoiceCard
              client="Client Name"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Update Status"
            />
            <InvoiceCard
              client="Client Name"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Unpaid"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Disputed"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Paid"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Paid"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Partially Paid"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Paid"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Overdue"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Awaited"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Draft"
            />
            <InvoiceCard
              client="Income Trend"
              amount="1,25,000"
              dueDate="2024-06-15"
              status="Paid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
