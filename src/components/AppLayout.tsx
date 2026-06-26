import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems } from "../data/siteContent";
import { cn } from "../lib/classNames";
import { BrandLogo } from "./BrandLogo";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { PageSwitchLoader } from "./PageSwitchLoader";
import { SiteLoader } from "./SiteLoader";

export function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-ivory-50 text-slate-900">
      <SiteLoader />
      <PageSwitchLoader />
      <header className="sticky top-0 z-50 border-b border-gold-200/70 bg-white/92 shadow-sm shadow-gold-950/5 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Eagle Crown home" onClick={closeMenu}>
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-crown-900 text-white shadow-sm"
                      : "text-slate-700 hover:-translate-y-0.5 hover:bg-gold-100 hover:text-crown-950 hover:shadow-sm",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-crown-950 shadow-sm shadow-gold-900/20 transition hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-900/20 lg:inline-flex"
          >
            Enquire Now
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-crown-900 shadow-sm lg:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-gold-100 bg-white px-4 pb-5 pt-2 shadow-xl shadow-crown-950/10 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 text-sm font-semibold",
                      isActive ? "bg-crown-900 text-white" : "text-slate-800 hover:bg-gold-100",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <Outlet key={location.pathname} />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-crown-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <BrandLogo inverted />
          <p className="mt-5 max-w-md leading-7 text-white/72">
            A diversified business group focused on manufacturing, food innovation,
            franchise development, and FMCG distribution.
          </p>
          <div className="mt-6 text-sm leading-7 text-white/72">
            <p className="font-semibold text-white">Karuna Conclave, Door No 45, 2nd Floor</p>
            <p>Ad Block, Shanthi Colony, Anna Nagar, Chennai 40, Chennai-600040</p>
            <p className="mt-2 font-semibold text-gold-200">WhatsApp: +91 96003 15007</p>
          </div>
          <p className="mt-5 font-display text-2xl text-gold-300">Everything is Possible</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Quick Links
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-white/72 transition hover:text-gold-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Business Verticals
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-white/72">
            <span>Distillery Manufacturing</span>
            <span>SR Foods</span>
            <span>One Bite</span>
            <span>VegPops</span>
            <span>Fruit Bite</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/55">
        Eagle Crown Group of Companies. Building businesses, creating opportunities,
        delivering growth.
      </div>
    </footer>
  );
}
