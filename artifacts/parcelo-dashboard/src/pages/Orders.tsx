import { useState } from "react";

type StatusFilter = "all" | "in-motion" | "delivered" | "cancelled";

interface Order {
  ref: string;
  summary: string;
  placed: string;
  status: string;
  statusType: "working" | "delivered" | "cancelled" | "transit";
  total: string;
}

const orders: Order[] = [
  {
    ref: "PC-882391",
    summary: "MacBook Pro M3, USB-C Hub...",
    placed: "Oct 12, 2023",
    status: "We're working on it",
    statusType: "working",
    total: "UGX 12,450,000",
  },
  {
    ref: "PC-774022",
    summary: "Nespresso Pods (x100), Aeroccino",
    placed: "Oct 05, 2023",
    status: "Delivered",
    statusType: "delivered",
    total: "UGX 890,000",
  },
  {
    ref: "PC-663910",
    summary: "Vitra Eames Lounge Chair...",
    placed: "Sep 20, 2023",
    status: "In Transit",
    statusType: "transit",
    total: "UGX 6,200,000",
  },
  {
    ref: "PC-551204",
    summary: "Dyson V15 Detect, Accessories",
    placed: "Sep 10, 2023",
    status: "Cancelled",
    statusType: "cancelled",
    total: "UGX 2,100,000",
  },
  {
    ref: "PC-448871",
    summary: "Nike Air Max 270, Jordan 1 High...",
    placed: "Aug 28, 2023",
    status: "Delivered",
    statusType: "delivered",
    total: "UGX 1,750,000",
  },
];

function StatusBadge({ status, type }: { status: string; type: Order["statusType"] }) {
  const styles: Record<Order["statusType"], string> = {
    working: "bg-secondary-fixed text-on-secondary-fixed-variant",
    delivered: "bg-surface-container-highest text-on-surface",
    transit: "bg-secondary text-on-secondary",
    cancelled: "bg-error-container text-on-error-container",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium ${styles[type]}`}
    >
      {status}
    </span>
  );
}

export default function Orders() {
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");

  const filters: { key: StatusFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "in-motion", label: "In motion" },
    { key: "delivered", label: "Delivered" },
    { key: "cancelled", label: "Cancelled" },
  ];

  const filtered = orders.filter((o) => {
    const matchesSearch =
      search === "" ||
      o.ref.toLowerCase().includes(search.toLowerCase()) ||
      o.summary.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "in-motion" && (o.statusType === "working" || o.statusType === "transit")) ||
      (filter === "delivered" && o.statusType === "delivered") ||
      (filter === "cancelled" && o.statusType === "cancelled");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="px-10 py-8 max-w-screen-xl">
      <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-[32px] leading-[1.2] tracking-[-0.02em] font-bold text-primary">
            Your orders
          </h2>
          <div className="hidden lg:flex gap-8">
            <div className="text-right">
              <p className="text-[12px] leading-[1.2] font-medium text-on-surface-variant uppercase tracking-wider">
                Active orders
              </p>
              <p className="text-[24px] leading-[1.3] font-bold text-primary">2</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] leading-[1.2] font-medium text-on-surface-variant uppercase tracking-wider">
                Est. Arrival
              </p>
              <p className="text-[24px] leading-[1.3] font-bold text-secondary">Oct 18</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] leading-[1.2] font-medium text-on-surface-variant">
              Filter by status
            </span>
            <div className="flex bg-surface-container p-1 rounded-lg w-fit">
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={[
                    "px-4 py-1.5 rounded-md text-[14px] leading-[1.2] font-medium transition-all",
                    filter === key
                      ? "bg-white shadow-sm text-primary"
                      : "text-on-surface-variant hover:text-primary",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reference or item..."
              className="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-lg bg-surface text-[16px] leading-[1.5] focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </header>

      <div className="bg-surface rounded-xl border border-outline-variant overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low">
                {["Reference", "Summary", "Placed date", "Status", "Total", ""].map((h, i) => (
                  <th
                    key={i}
                    className={[
                      "px-4 py-4 text-[14px] leading-[1.2] font-medium text-on-surface-variant uppercase tracking-wider",
                      i === 4 ? "text-right" : "",
                    ].join(" ")}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-on-surface-variant text-[16px]">
                    No orders found.
                  </td>
                </tr>
              ) : (
                filtered.map((order) => (
                  <tr
                    key={order.ref}
                    className="hover:bg-surface-container-lowest transition-colors group"
                  >
                    <td className="px-4 py-5 text-[14px] leading-[1.2] font-bold text-primary">
                      {order.ref}
                    </td>
                    <td className="px-4 py-5 text-[16px] leading-[1.5]">{order.summary}</td>
                    <td className="px-4 py-5 text-[16px] leading-[1.5]">{order.placed}</td>
                    <td className="px-4 py-5">
                      <StatusBadge status={order.status} type={order.statusType} />
                    </td>
                    <td className="px-4 py-5 text-[14px] leading-[1.2] font-medium text-primary text-right">
                      {order.total}
                    </td>
                    <td className="px-4 py-5 text-right">
                      <button className="px-4 py-1.5 border border-outline rounded-md text-[14px] leading-[1.2] font-medium group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        Open
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
