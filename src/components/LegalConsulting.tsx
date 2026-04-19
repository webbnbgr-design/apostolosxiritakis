import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageSquare } from 'lucide-react';

const benefits = [
  'Ανάλυση νομικού κινδύνου (Due Diligence)',
  'Σύνταξη & Έλεγχος Συμβάσεων',
  'Στρατηγική Εξωδικαστικής Επίλυσης',
  'Υποστήριξη σε Διοικητικές Διαδικασίες',
  'Συμβουλές Ακίνητης Περιουσίας',
];

export default function LegalConsulting() {
  return (
    <section id="consulting" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Στρατηγικός Συνεργάτης</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            Νομική <span className="text-accent italic tracking-wide">Συμβουλευτική</span> & Πρόληψη
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Η καλύτερη δικαστηριακή μάχη είναι αυτή που αποφεύγεται μέσω σωστού σχεδιασμού. Παρέχουμε εξειδικευμένες συμβουλές που προστατεύουν τα συμφέροντά σας πριν προκύψει το πρόβλημα.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="text-lg font-medium text-left">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
