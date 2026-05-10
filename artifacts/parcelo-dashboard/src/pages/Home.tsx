export default function Home() {
  return (
    <div className="px-10 py-8 max-w-[1000px] mx-auto">
      <header className="mb-8">
        <h1 className="text-[32px] leading-[1.2] tracking-[-0.02em] font-bold text-primary">
          Good morning, Brian.
        </h1>
        <p className="text-[18px] leading-[1.6] text-on-surface-variant mt-2">
          Welcome back to your global shopping dashboard.
        </p>
      </header>

      <section className="mb-12">
        <div className="bg-[#FFF8E1] p-8 rounded-xl border border-secondary/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <span className="material-symbols-outlined">priority_high</span>
              <span className="text-[14px] leading-[1.2] font-bold uppercase tracking-widest">
                Action Required
              </span>
            </div>
            <h2 className="text-[24px] leading-[1.3] font-semibold text-primary mb-2">
              Quote awaiting approval
            </h2>
            <p className="text-[16px] leading-[1.5] text-on-surface-variant mb-6 max-w-2xl">
              We've received your request for the Apple Store UK items. Your personalised quote is ready for review and payment. Review the details to proceed with your order.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-secondary-container text-primary font-bold px-8 py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all text-[14px]">
                Review Quote
              </button>
              <button className="text-primary font-bold border border-primary px-8 py-3 rounded-lg hover:bg-surface-container-low transition-colors text-[14px]">
                View Details
              </button>
            </div>
          </div>
          <span
            className="material-symbols-outlined absolute -right-8 -bottom-8 text-secondary opacity-5"
            style={{ fontSize: "160px" }}
          >
            request_quote
          </span>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-[24px] leading-[1.3] font-semibold text-primary">Recent orders</h3>
          <a
            href="/orders"
            className="text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity text-[14px]"
          >
            See all orders
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-surface border border-outline-variant p-6 rounded-lg flex items-center justify-between group hover:border-primary transition-colors">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-surface-container-high rounded flex items-center justify-center text-on-surface-variant flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                  package_2
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="font-bold text-primary text-[16px]">PC-882194</span>
                  <span className="bg-secondary text-on-secondary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tight">
                    In Transit
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">
                  Selfridges London &bull; 3 items &bull; £420.00 &bull; Est: Thu, 14 Oct
                </p>
              </div>
            </div>
            <button className="px-6 py-2 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-all text-[14px] ml-4 flex-shrink-0">
              Track Order
            </button>
          </div>

          <div className="bg-surface border border-outline-variant p-6 rounded-lg flex items-center justify-between group hover:border-primary transition-colors">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-surface-container-high rounded flex items-center justify-center text-on-surface-variant flex-shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                  inventory
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="font-bold text-primary text-[16px]">PC-879012</span>
                  <span className="bg-surface-container text-on-surface-variant text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tight">
                    Delivered
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">
                  Amazon US &bull; 1 item &bull; $1,200.00
                </p>
              </div>
            </div>
            <button className="px-6 py-2 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-all text-[14px] ml-4 flex-shrink-0">
              Open
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
