import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Αρχική', href: '#home' },
  { label: 'Βιογραφικό', href: '#bio' },
  { label: 'Υπηρεσίες', href: '#services' },
  { label: 'Νομική Συμβουλευτική', href: '#consulting' },
  { label: 'Επικοινωνία', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-heading font-bold text-primary leading-tight">
            ΑΠΟΣΤΟΛΟΣ ΞΥΡΙΤΑΚΗΣ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
            ΔΙΚΗΓΟΡΟΣ • ΗΡΑΚΛΕΙΟ
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Phone className="mr-2 h-4 w-4" />
            2810 226189
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2 border-b border-muted last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-primary text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                2810 226189
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
