import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import logoStella from '@/assets/logo-stella.png';
import AppSidebar from './AppSidebar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <img 
              src={logoStella} 
              alt="Logo Estúdio Sobrancelhas Perfeitas" 
              className={`h-12 md:h-14 w-auto object-contain ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5522992497973?text=Olá! Vim pelo site e quero agendar um horário. Pode me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Agendar Agora
            </a>
          </nav>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/5522992497973?text=Olá! Vim pelo site e quero agendar um horário. Pode me ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className={`md:hidden btn-primary text-xs px-4 py-2 ${
              isScrolled ? '' : ''
            }`}
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        <AppSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      </AnimatePresence>
    </>
  );
};

export default Header;
