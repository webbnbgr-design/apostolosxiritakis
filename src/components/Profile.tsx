import { motion } from 'motion/react';
import { Award, BookOpen, Scale, History } from 'lucide-react';

const highlights = [
  { icon: History, title: '25+ Έτη Εμπειρίας', text: 'Συνεχής παρουσία στα δικαστήρια από το 1998.' },
  { icon: BookOpen, title: 'Βαθιά Γνώση', text: 'Συνεχής ενημέρωση για τις αλλαγές στη νομοθεσία.' },
  { icon: Award, title: 'Εξειδίκευση', text: 'Μελέτη υποθέσεων με έμφαση στη λεπτομέρεια.' },
  { icon: Scale, title: 'Μαχητικότητα', text: 'Δυναμική εκπροσώπηση σε κάθε βαθμό δικαιοδοσίας.' },
];

export default function Profile() {
  return (
    <section id="bio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Το Προφίλ</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 underline decoration-accent/20 underline-offset-8">
            Απόστολος Ξυριτάκης
          </h3>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Με σπουδές στη Νομική και συνεχή ενεργή παρουσία από το 1998, ο Απόστολος Ξυριτάκης αποτελεί έναν έμπειρο και μάχιμο δικηγόρο στο Ηράκλειο Κρήτης.
            </p>
            <p>
              Η φιλοσοφία του γραφείου εδράζεται στην εξειδικευμένη μελέτη κάθε υπόθεσης ξεχωριστά. Δεν πιστεύουμε σε τυποποιημένες λύσεις, αλλά σε στρατηγικές που προσαρμόζονται στις ανάγκες της δικής σας περίπτωσης.
            </p>
            <p>
              Με βαθιά γνώση της τοπικής νομικής πραγματικότητας και έδρα στο κέντρο της πόλης (Καντανολέοντος 13), παρέχουμε λύσεις που συνδυάζουν τη νομική αρτιότητα με την ανθρώπινη προσέγγιση.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-navy/5 flex items-center justify-center rounded-xl text-primary mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
