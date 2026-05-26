"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const trainers = [
  {
    name: 'Rafael Costa',
    specialty: 'Musculação & Hipertrofia',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Amanda Silva',
    specialty: 'Cross Training & Funcional',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Lucas Mendes',
    specialty: 'Artes Marciais & Defesa',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Juliana Santos',
    specialty: 'Pilates & Yoga',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
]

export function TrainersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="trainers" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nosso Time
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Treine com os <span className="text-primary">melhores</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossos personal trainers são profissionais certificados com anos de experiência, 
            prontos para guiar você até seus objetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/4] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${trainer.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-primary/50 ring-inset rounded-2xl" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-sm text-primary mb-4">{trainer.specialty}</p>
                
                {/* Social Links */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={trainer.instagram}
                    className="w-9 h-9 rounded-lg bg-card/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Instagram de ${trainer.name}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.linkedin}
                    className="w-9 h-9 rounded-lg bg-card/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`LinkedIn de ${trainer.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.twitter}
                    className="w-9 h-9 rounded-lg bg-card/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Twitter de ${trainer.name}`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
