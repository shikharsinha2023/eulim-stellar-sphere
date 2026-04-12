import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import eulimLogo from "@/assets/eulim-logo.jpeg";
import JoinUsDialog from "./JoinUsDialog";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "History", to: "/history" },
  { label: "Activities", to: "/activities" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
  { label: "Sponsor Us", to: "/sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={eulimLogo} alt="Eulim Science Club" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-bold text-foreground">EULIM <span className="text-primary">Science Club</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-muted/50 ${
                  location.pathname === l.to ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setJoinOpen(true)}
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Join Us
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 transition-colors rounded-lg hover:bg-muted/50 ${
                      location.pathname === l.to ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setOpen(false); setJoinOpen(true); }}
                  className="mt-2 text-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
                >
                  Join Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <JoinUsDialog open={joinOpen} onOpenChange={setJoinOpen} />
    </>
  );
}
