"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Flame, Activity, Wind, Heart, Swords } from 'lucide-react'

const modalidades = [
  {
    icon: Dumbbell,
    title: 'Musculação',
    description: 'Desenvolva força e hipertrofia com equipamentos de última geração e acompanhamento profissional.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Flame,
    title: 'Cross Training',
    description: 'Treinos funcionais de alta intensidade para condicionamento físico completo.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Activity,
    title: 'Funcional',
    description: 'Movimentos naturais do corpo para melhorar força, equilíbrio e mobilidade.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Wind,
    title: 'Pilates',
    description: 'Fortaleça o core, melhore a postura e aumente a flexibilidade com precisão.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Heart,
    title: 'Cardio',
    description: 'Esteiras, bikes e elípticos premium para queimar calorias e melhorar o sistema cardiovascular.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2074&auto=format&fit=crop',
  },
  {
    icon: Swords,
    title: 'Lutas',
    description: 'Boxe, Muay Thai, Jiu-Jitsu e MMA com professores campeões para todas as faixas.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop',
  },
]

export function ModalidadesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="modalidades" className="py-24 md:py-32 bg-card/50 relative">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Modalidades
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Escolha sua <span className="text-primary">modalidade</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos diversas modalidades para atender todos os objetivos e preferências.
            Encontre a atividade perfeita para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalidades.map((modalidade, index) => (
            <motion.div
              key={modalidade.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${modalidade.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-primary/50 ring-inset" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur flex items-center justify-center group-hover:glow-green transition-all duration-300">
                    <modalidade.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{modalidade.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors">
                  {modalidade.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
