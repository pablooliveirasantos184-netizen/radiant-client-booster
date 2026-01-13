import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-beauty.jpg';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Studio Stella Souza - Estética Facial e Corporal"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary-foreground/90 text-sm md:text-lg lg:text-xl mb-3 md:mb-4 tracking-widest uppercase font-light">
            Especialista em Estética desde 2008
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-primary-foreground mb-4 md:mb-6"
        >
          Realce Sua Beleza
          <br />
          <span className="text-primary-foreground/90 font-normal">Natural</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/85 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
        >
          Há 17 anos transformando a autoestima de mulheres em Cabo Frio com 
          tratamentos exclusivos de design de sobrancelhas, micropigmentação e 
          cuidados faciais personalizados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center px-2"
        >
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto text-primary-foreground border-2 border-primary-foreground/50 px-8 py-4 
                     rounded-full font-medium transition-all duration-300 
                     hover:bg-primary-foreground/10 hover:border-primary-foreground min-h-[52px]"
          >
            Conheça Nossos Serviços
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              17+
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              5k+
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">Clientes Satisfeitas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              100%
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">Dedicação</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary-foreground/70" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
