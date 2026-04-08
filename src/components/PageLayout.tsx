import { ReactNode } from "react";
import Navbar from "./Navbar";
import InfiniteGrid from "./InfiniteGrid";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-body relative">
      <InfiniteGrid />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm font-semibold">EULIM Science Club</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EULIM Science Club — School of Sciences. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
