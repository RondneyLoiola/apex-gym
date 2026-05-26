"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, LineChart, Calendar, User } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Treinos Personalizados',
    description: 'Planos de treino criados exclusivamente para seus objetivos.',
  },
  {
    icon: LineChart,
    title: 'Controle de Evolução',
    description: 'Acompanhe seu progresso com métricas detalhadas em tempo real.',
  },
  {
    icon: Calendar,
    title: 'Agendamento de Aulas',
    description: 'Reserve suas aulas favoritas com apenas alguns cliques.',
  },
  {
    icon: User,
    title: 'Área do Aluno',
    description: 'Gerencie seu plano, pagamentos e histórico de treinos.',
  },
]

export function AppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              App APEX GYM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Seu treino na <span className="text-primary">palma da mão</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Baixe nosso aplicativo exclusivo e tenha controle total sobre sua 
              jornada fitness. Disponível para iOS e Android.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Baixar na</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Baixar no</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            
            {/* Phone Frame */}
            <div className="relative w-[280px] h-[580px] bg-card rounded-[3rem] p-3 ring-1 ring-border shadow-2xl">
              {/* Inner Screen */}
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-card/50 flex items-center justify-between px-6">
                  <span className="text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-foreground/50 rounded-sm" />
                    <div className="w-4 h-2 bg-foreground/50 rounded-sm" />
                    <div className="w-6 h-2.5 bg-primary rounded-sm" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">A</span>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Olá,</div>
                      <div className="font-semibold">Mariana</div>
                    </div>
                  </div>

                  {/* Progress Card */}
                  <div className="glass rounded-2xl p-4 mb-4">
                    <div className="text-xs text-muted-foreground mb-2">Progresso Semanal</div>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 65, 30, 80, 55, 70, 45].map((height, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative">
                          <div 
                            className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
                      <span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span>
                    </div>
                  </div>

                  {/* Today&apos;s Workout */}
                  <div className="text-xs text-muted-foreground mb-2">Treino de Hoje</div>
                  <div className="bg-card rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Peito e Tríceps</div>
                        <div className="text-xs text-muted-foreground">45 min • 8 exercícios</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
