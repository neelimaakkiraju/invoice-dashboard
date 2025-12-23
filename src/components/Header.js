import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { FiBell } from "react-icons/fi";

export default function Header({ awaitedCount = 0, overdueCount = 0 }) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-b-3xl shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            className="flex items-center justify-center h-10 w-10 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
            aria-label="Go back"
          >
            <GoChevronLeft className="text-2xl" />
          </button>
          <div>
            <p className="text-sm text-white/80">Invoices & Collections</p>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-xs text-white/70 mt-1">
              Track performance, reminders, and payouts at a glance.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Awaiting payment: {awaitedCount}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Overdue: {overdueCount}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button className="relative h-10 w-10 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors">
            <FiBell className="h-5 w-5 mx-auto mt-2 text-white" />
            {overdueCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-amber-300 text-purple-800 text-[10px] font-bold flex items-center justify-center">
                {overdueCount}
              </span>
            )}
          </button>
          <img
            src="https://i.pravatar.cc/64?img=3"
            alt="Profile"
            className="w-11 h-11 rounded-2xl border border-white/30 shadow-sm"
          />
        </div>
      </div>
    </header>
  );
}
