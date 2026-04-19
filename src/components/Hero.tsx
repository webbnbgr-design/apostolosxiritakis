import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center bg-muted/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-navy/5 -skew-y-3 origin-top-right transition-all" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-[0.2em] uppercase mb-8">
              ΑΠΟ ΤΟ 1998
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-primary leading-tight mb-8">
              Συνέπειεια, γνώση και <br />
              <span className="text-accent underline underline-offset-12 decoration-accent/30">δυναμική</span> εκπροσώπηση
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light italic">
              Εξειδικευμένη νομική υποστήριξη στο Ηράκλειο. Μελέτη υποθέσεων σε βάθος και στρατηγική διεκδίκηση των δικαιωμάτων σας.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-2xl h-auto shadow-2xl shadow-navy/20 active:scale-95 transition-all" asChild>
                <a href="#services">
                  Οι Υπηρεσίες μας
                  <ChevronRight className="ml-3 h-8 w-8" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
