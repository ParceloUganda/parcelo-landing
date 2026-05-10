import { ReactNode } from "react";
import { Link, useLocation } from "wouter";

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/orders", icon: "package_2", label: "Orders" },
  { href: "/wishlist", icon: "bookmark", label: "Wishlist" },
];

function NavLink({ href, icon, label }: NavItem) {
  const [location] = useLocation();
  const active = location === href;
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-[14px] leading-[1.2]",
        active
          ? "text-primary font-bold bg-secondary-container"
          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
      ].join(" ")}
    >
      <span
        className="material-symbols-outlined"
        style={
          active
            ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
            : undefined
        }
      >
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}

interface MobileTab {
  icon: string;
  label: string;
  href?: string;
  externalHref?: string;
}

const mobileTabs: MobileTab[] = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/orders", icon: "package_2", label: "Orders" },
  { externalHref: "https://wa.me/256792170962", icon: "add_circle", label: "New" },
  { externalHref: "https://wa.me/256792170962", icon: "track_changes", label: "Track" },
  { href: "/wishlist", icon: "account_circle", label: "Profile" },
];

function MobileTabItem({ tab }: { tab: MobileTab }) {
  const [location] = useLocation();
  const active = tab.href !== undefined && location === tab.href;

  const content = (
    <>
      <span
        className={[
          "material-symbols-outlined text-[22px]",
          active ? "text-primary" : "text-on-surface-variant",
        ].join(" ")}
        style={
          active
            ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
            : undefined
        }
      >
        {tab.icon}
      </span>
      <span
        className={[
          "text-[10px] font-medium leading-tight",
          active ? "text-primary font-bold" : "text-on-surface-variant",
        ].join(" ")}
      >
        {tab.label}
      </span>
    </>
  );

  if (tab.externalHref) {
    return (
      <a
        href={tab.externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 flex-1 py-2"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={tab.href!} className="flex flex-col items-center gap-0.5 flex-1 py-2">
      {content}
    </Link>
  );
}

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <header className="flex justify-between items-center h-16 px-10 w-full fixed top-0 z-50 bg-surface border-b border-outline-variant">
        <div className="text-[24px] leading-[1.3] font-black text-primary">Parcelo</div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full">
            notifications
          </button>
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full">
            account_circle
          </button>
        </div>
      </header>

      <aside className="hidden md:flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] w-[260px] bg-surface border-r border-outline-variant py-8 px-4">
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant">
          <div className="flex flex-col gap-1 mb-4">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span className="text-[12px] font-medium leading-[1.2]">Addresses</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">credit_card</span>
              <span className="text-[12px] font-medium leading-[1.2]">Billing</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-error hover:bg-error-container rounded transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="text-[12px] font-medium leading-[1.2]">Sign Out</span>
            </a>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-outline-variant px-1">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant">person</span>
            </div>
            <div className="min-w-0">
              <div className="text-[14px] font-bold text-on-background truncate leading-tight">
                Brian Okello
              </div>
              <div className="text-[12px] text-on-surface-variant truncate">Premium Member</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="pt-16 md:ml-[260px] min-h-screen">
        <div className="pb-20 md:pb-0">{children}</div>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-surface border-t border-outline-variant">
        {mobileTabs.map((tab) => (
          <MobileTabItem key={tab.icon} tab={tab} />
        ))}
      </nav>
    </div>
  );
}
