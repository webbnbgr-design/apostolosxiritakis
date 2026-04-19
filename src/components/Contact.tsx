import { useState } from 'react';
import * as React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Επικοινωνία</h2>
          <h3 className="text-4xl font-heading font-bold text-primary mb-8">Είμαστε εδώ για εσάς</h3>
          <p className="text-lg text-muted-foreground">
            Επικοινωνήστε μαζί μας για να προγραμματίσετε το ραντεβού σας ή για οποιαδήποτε πληροφορία.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-8 bg-muted/20 rounded-2xl border border-border">
            <div className="w-16 h-16 bg-navy/5 flex items-center justify-center rounded-full text-primary mb-6">
              <MapPin size={32} />
            </div>
            <h4 className="font-bold text-primary mb-2 text-xl">Διεύθυνση</h4>
            <p className="text-muted-foreground leading-relaxed">Καντανολέοντος 13,<br />Ηράκλειο, 71202</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-muted/20 rounded-2xl border border-border">
            <div className="w-16 h-16 bg-navy/5 flex items-center justify-center rounded-full text-primary mb-6">
              <Phone size={32} />
            </div>
            <h4 className="font-bold text-primary mb-2 text-xl">Τηλέφωνο</h4>
            <p className="text-muted-foreground leading-relaxed">2810 226189</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-muted/20 rounded-2xl border border-border">
            <div className="w-16 h-16 bg-navy/5 flex items-center justify-center rounded-full text-primary mb-6">
              <Mail size={32} />
            </div>
            <h4 className="font-bold text-primary mb-2 text-xl">Email</h4>
            <p className="text-muted-foreground leading-relaxed">info@xyritakis-law.gr</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-muted/20 rounded-2xl border border-border">
            <div className="w-16 h-16 bg-navy/5 flex items-center justify-center rounded-full text-primary mb-6">
              <Clock size={32} />
            </div>
            <h4 className="font-bold text-primary mb-2 text-xl">Ωράριο</h4>
            <p className="text-muted-foreground leading-relaxed">Δευτέρα - Παρασκευή<br />09:00 - 14:00 & 18:00 - 21:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
