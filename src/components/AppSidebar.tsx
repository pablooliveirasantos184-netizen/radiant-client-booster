import { Home, User, Sparkles, Phone, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logoStella from '@/assets/logo-stella.png';

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppSidebar = ({ isOpen, onClose }: AppSidebarProps) => {
  const navLinks = [
    { href: '#home', label: 'Início', icon: Home },
    { href: '#sobre', label: 'Sobre', icon: User },
    { href: '#servicos', label: 'Serviços', icon: Sparkles },
    { href: '#contato', label: 'Contato', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-72 bg-sidebar-background border-r border-sidebar-border z-50 flex flex-col shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <img 
            src={logoStella} 
            alt="Logo Estúdio Sobrancelhas Perfeitas" 
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 font-medium"
                >
                  <link.icon size={20} className="text-sidebar-primary" />
                  <span>{link.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="p-6 border-t border-sidebar-border">
          <a
            href="https://wa.me/5522992497973?text=Olá! Vim pelo site e quero agendar um horário. Pode me ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block text-sm"
          >
            Agendar Agora
          </a>
        </div>
      </motion.aside>
    </>
  );
};

export default AppSidebar;
