import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Award,
      title: '17 Anos de Expertise',
      description: 'Especialização contínua desde 2008',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cuidado individual e personalizado',
    },
    {
      icon: Users,
      title: 'Clientes Fiéis',
      description: 'Milhares de histórias de sucesso',
    },
    {
      icon: Sparkles,
      title: 'Técnicas Exclusivas',
      description: 'Resultados naturais e duradouros',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Sobre Nós
            </span>
            <h2 className="heading-section text-foreground mt-3 mb-6">
              Conheça Stella Souza
            </h2>
            <p className="text-body mb-6">
              Apaixonada por realçar a beleza natural de cada mulher, comecei minha 
              jornada na estética em 2008. Ao longo de 17 anos, desenvolvi técnicas 
              exclusivas que valorizam os traços únicos de cada cliente.
            </p>
            <p className="text-body mb-8">
              No <strong className="text-foreground">Studio Stella Souza</strong>, 
              acreditamos que a beleza vai além da aparência — é sobre como você se 
              sente. Cada procedimento é realizado com dedicação, usando produtos de 
              alta qualidade e técnicas atualizadas para garantir resultados que 
              superam expectativas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background"
                >
                  <feature.icon className="text-primary flex-shrink-0 mt-0.5" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/5522992497973?text=Olá, Stella! Vim pelo site e quero conhecer melhor o studio. Pode me contar mais?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Fale Comigo no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
