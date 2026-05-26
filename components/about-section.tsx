"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Users, Thermometer, Calendar, Apple, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Equipamentos Premium',
    description: 'Máquinas de última geração das melhores marcas mundiais para resultados máximos.',
  },
  {
    icon: Users,
    title: 'Personal Trainers',
    description: 'Profissionais certificados para criar treinos personalizados para seus objetivos.',
  },
  {
    icon: Thermometer,
    title: 'Ambiente Climatizado',
    description: 'Temperatura ideal o ano todo para você treinar com conforto máximo.',
  },
  {
    icon: Calendar,
    title: 'Aulas Coletivas',
    description: 'Mais de 50 aulas semanais de diferentes modalidades com os melhores instrutores.',
  },
  {
    icon: Apple,
    title: 'Nutrição Esportiva',
    description: 'Acompanhamento nutricional especializado para potencializar seus resultados.',
  },
  {
    icon: Sparkles,
    title: 'Tecnologia Avançada',
    description: 'App exclusivo para acompanhar evolução, agendar aulas e controlar treinos.',
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre Nós
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Mais que uma academia,{' '}
            <span className="text-primary">um estilo de vida</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A APEX GYM nasceu para redefinir o conceito de academia premium. 
            Com tecnologia de ponta, profissionais excepcionais e um ambiente 
            projetado para inspirar, oferecemos a experiência fitness definitiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-green transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
