import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-white leading-tight">
                ΑΠΟΣΤΟΛΟΣ ΞΥΡΙΤΑΚΗΣ
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-sans">
                ΔΙΚΗΓΟΡΟΣ • ΗΡΑΚΛΕΙΟ
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Παροχή εξειδικευμένων νομικών υπηρεσιών με συνέπεια, γνώση και δυναμισμό από το 1998.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-accent transition-colors">Αρχική</a></li>
              <li><a href="#bio" className="hover:text-accent transition-colors">Βιογραφικό</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Υπηρεσίες</a></li>
              <li><a href="#consulting" className="hover:text-accent transition-colors">Νομική Συμβουλευτική</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Υπηρεσίες</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Δικαστηριακή Εκπροσώπηση</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Αστικό Δίκαιο</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Οικογενειακό Δίκαιο</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Ποινικό Δίκαιο</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Νομικός Σύμβουλος</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Τοποθεσία</h4>
            <p className="text-white/60 mb-4 pb-4 border-b border-white/10">
              Καντανολέοντος 13,<br />
              Ηράκλειο, 71202
            </p>
            <p className="text-white/60">
              T: 2810 226189<br />
              E: info@xyritakis-law.gr
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-sm text-white/40 font-sans">
          <p>© {new Date().getFullYear()} Απόστολος Ξυριτάκης. Με την επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Όροι Χρήσης</a>
            <a href="#" className="hover:text-accent transition-colors">Πολιτική Απορρήτου</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
