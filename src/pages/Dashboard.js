import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import IncomeChart from "../components/IncomeChart";
import InvoiceCard from "../components/InvoiceCard";
import { FiFilter, FiPlus, FiSearch, FiUploadCloud } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";

const invoiceData = [
  {
    id: "INV-1042",
    client: "Northwind Co.",
    project: "Website revamp",
    amount: 125000,
    dueDate: "2026-01-18",
    status: "Awaited",
    priority: "High",
  },
  {
    id: "INV-1041",
    client: "Acme Health",
    project: "Patient portal",
    amount: 94000,
    dueDate: "2025-12-28",
    status: "Overdue",
    priority: "High",
  },
  {
    id: "INV-1039",
    client: "Globex",
    project: "Mobile commerce",
    amount: 78000,
    dueDate: "2026-01-05",
    status: "Paid",
    priority: "Normal",
  },
  {
    id: "INV-1037",
    client: "Blue Horizon",
    project: "Brand rollout",
    amount: 52000,
    dueDate: "2026-01-12",
    status: "Partially Paid",
    priority: "Normal",
  },
  {
    id: "INV-1035",
    client: "Volt Labs",
    project: "API integration",
    amount: 41000,
    dueDate: "2026-01-08",
    status: "Draft",
    priority: "Low",
  },
  {
    id: "INV-1034",
    client: "Aurora Fintech",
    project: "Data dashboards",
    amount: 68500,
    dueDate: "2025-12-30",
    status: "Awaited",
    priority: "High",
  },
  {
    id: "INV-1032",
    client: "Pine & Co.",
    project: "Marketing site",
    amount: 36000,
    dueDate: "2025-12-27",
    status: "Paid",
    priority: "Low",
  },
  {
    id: "INV-1029",
    client: "Summit Studio",
    project: "Product video",
    amount: 27500,
    dueDate: "2026-01-03",
    status: "Disputed",
    priority: "High",
  },
];

const chartSeries = [
  { month: "Jun", billed: 72000, collected: 61000 },
  { month: "Jul", billed: 84000, collected: 72000 },
  { month: "Aug", billed: 91000, collected: 80000 },
  { month: "Sep", billed: 97000, collected: 83000 },
  { month: "Oct", billed: 102000, collected: 89000 },
  { month: "Nov", billed: 108000, collected: 94000 },
  { month: "Dec", billed: 113000, collected: 99000 },
  { month: "Jan", billed: 118000, collected: 102000 },
];

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [range, setRange] = useState("6M");

  const totals = useMemo(() => {
    const awaited = invoiceData
      .filter((item) => item.status === "Awaited")
      .reduce((sum, item) => sum + item.amount, 0);
    const overdue = invoiceData
      .filter((item) => item.status === "Overdue")
      .reduce((sum, item) => sum + item.amount, 0);
    const paid = invoiceData
      .filter((item) => item.status === "Paid")
      .reduce((sum, item) => sum + item.amount, 0);
    const partiallyPaid = invoiceData
      .filter((item) => item.status === "Partially Paid")
      .reduce((sum, item) => sum + item.amount, 0);

    const dueSoon = invoiceData.filter((item) => {
      const days = (new Date(item.dueDate) - new Date()) / (1000 * 60 * 60 * 24);
      return days >= 0 && days <= 7;
    });

    return {
      awaited,
      overdue,
      paid,
      partiallyPaid,
      awaitedCount: invoiceData.filter((item) => item.status === "Awaited")
        .length,
      overdueCount: invoiceData.filter((item) => item.status === "Overdue")
        .length,
      total: invoiceData.reduce((sum, item) => sum + item.amount, 0),
      dueSoon,
    };
  }, []);

  const filteredInvoices = useMemo(() => {
    return invoiceData
      .filter((invoice) => {
        const matchesStatus =
          statusFilter === "all" || invoice.status === statusFilter;
        const term = searchTerm.toLowerCase();
        const matchesSearch =
          invoice.client.toLowerCase().includes(term) ||
          invoice.id.toLowerCase().includes(term);
        return matchesStatus && matchesSearch;
      })
      .sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
  }, [statusFilter, searchTerm]);

  const chartData = useMemo(() => {
    const slice = range === "3M" ? -3 : range === "6M" ? -6 : chartSeries.length;
    return chartSeries.slice(slice);
  }, [range]);

  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-white min-h-screen">
      <Header
        awaitedCount={totals.awaitedCount}
        overdueCount={totals.overdueCount}
      />

      <main className="max-w-6xl mx-auto px-4 pb-16 -mt-10 space-y-8">
        <section className="grid gap-4 md:grid-cols-[2fr,1fr]">
          <div className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Create a new invoice</p>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Send branded invoices in seconds
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                  Save templates, automate reminders, and keep clients in the loop.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-600 text-white text-sm font-semibold shadow-md hover:bg-purple-700 transition-colors">
                  <FiPlus className="h-4 w-4" />
                  Create Invoice
                </button>
                <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-slate-700 text-sm font-semibold border border-slate-200 hover:border-purple-200 transition-colors">
                  <FiUploadCloud className="h-4 w-4" />
                  Upload PDF
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                Saved templates
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                Auto-reminders enabled
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                Smart tax detection
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-slate-100 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-semibold">
                92%
              </div>
              <div>
                <p className="text-xs text-slate-500">Collection health</p>
                <h3 className="font-semibold text-slate-900">
                  On-time payouts are improving
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <LuClock3 className="text-amber-500" />
                {totals.dueSoon.length} invoices due this week
              </span>
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                Avg. pay time: 8 days
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Automated reminders • Late fees set</span>
              <button className="text-purple-700 font-semibold">Adjust</button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total invoiced"
            amount={currency.format(totals.total)}
            delta="+12% MoM"
            subtitle="Includes drafts and awaited payments"
          />
          <StatsCard
            title="Awaiting payment"
            amount={currency.format(totals.awaited)}
            delta="+5% vs last month"
          />
          <StatsCard
            title="Overdue"
            amount={currency.format(totals.overdue)}
            delta="+3% this week"
            trend="down"
          />
          <StatsCard
            title="Collected"
            amount={currency.format(totals.paid + totals.partiallyPaid)}
            delta="+8% cleared"
          />
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white rounded-3xl p-5 shadow-sm ring-1 ring-slate-100">
            <IncomeChart data={chartData} range={range} onRangeChange={setRange} />
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900">Reminders</h3>
              <span className="text-xs text-slate-500">Next 7 days</span>
            </div>
            <div className="space-y-3">
              {totals.dueSoon.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm bg-slate-50 rounded-2xl px-3 py-3"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.client}</p>
                    <p className="text-xs text-slate-500">
                      {item.project} • {item.dueDate}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-3 py-1">
                    Due soon
                  </span>
                </div>
              ))}
              {totals.dueSoon.length === 0 && (
                <p className="text-sm text-slate-500">No invoices due in the next 7 days.</p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-5 shadow-sm ring-1 ring-slate-100 space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl border border-slate-200 bg-slate-50 w-full lg:w-80">
              <FiSearch className="text-slate-400" />
              <input
                type="text"
                placeholder="Search by client or invoice ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-2 text-xs rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                <FiFilter className="h-4 w-4" />
                Filters
              </button>
              {["all", "Awaited", "Paid", "Overdue", "Draft", "Disputed", "Partially Paid"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-2 text-xs rounded-2xl border transition-colors ${
                      statusFilter === status
                        ? "bg-purple-600 text-white border-purple-600"
                        : "bg-white text-slate-700 border-slate-200 hover:border-purple-200"
                    }`}
                  >
                    {status === "all" ? "All" : status}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{filteredInvoices.length} invoices</span>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 text-slate-700 font-semibold">
              Export CSV <GoTriangleDown className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-3">
            {filteredInvoices.map((invoice) => (
              <InvoiceCard
                key={invoice.id}
                client={invoice.client}
                amount={invoice.amount}
                dueDate={invoice.dueDate}
                status={invoice.status}
                invoiceId={invoice.id}
                project={invoice.project}
                priority={invoice.priority}
              />
            ))}
            {filteredInvoices.length === 0 && (
              <div className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                No invoices match your filters yet.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
