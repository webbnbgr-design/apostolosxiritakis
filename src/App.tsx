import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import LegalConsulting from './components/LegalConsulting';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Services />
        <LegalConsulting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
