import { motion } from 'motion/react';
import { Gavel, HeartHandshake, FileText, ShieldCheck, Users, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Δικαστηριακή Εκπροσώπηση',
    description: 'Εκπροσώπηση ενώπιον κάθε βαθμού δικαιοδοσίας με έμφαση στη μαχητική διεκδίκηση και την εμπειρία των αιθουσών.',
    icon: Gavel,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Νομική Συμβουλευτική',
    description: 'Στρατηγικές συμβουλές για ιδιώτες και επιχειρήσεις. Πρόληψη νομικών κινδύνων και εξωδικαστική επίλυση διαφορών.',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Αστικό Δίκαιο',
    description: 'Διαδικαστικές πράξεις, συμβάσεις, εμπράγματο δίκαιο και διαφορές που άπτονται της καθημερινότητας του πολίτη.',
    icon: FileText,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Οικογενειακό & Διαζύγια',
    description: 'Διαχείριση ευαίσθητων υποθέσεων με επαγγελματισμό. Διαζύγια, επιμέλεια τέκνων και διατροφές.',
    icon: HeartHandshake,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Ποινικό Δίκαιο',
    description: 'Υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας, από την προδικασία έως το ακροατήριο.',
    icon: Users,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Εταιρικό Δίκαιο',
    description: 'Νομική υποστήριξη επιχειρήσεων, σύσταση εταιρειών και διαχείριση εμπορικών συμφωνιών.',
    icon: Briefcase,
    color: 'bg-yellow-50 text-yellow-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Υπηρεσίες</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Εξειδικευμένες Νομικές Λύσεις
          </h3>
          <p className="text-lg text-muted-foreground">
            Καλύπτουμε όλους τους κλάδους του δικαίου με απόλυτη εχεμύθεια και προσήλωση στο συμφέρον του εντολέα.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
