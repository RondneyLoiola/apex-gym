"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Basic',
    price: 99,
    period: '/mês',
    description: 'Perfeito para começar sua jornada fitness',
    features: [
      'Acesso à musculação',
      'Acesso ao cardio',
      'Vestiários completos',
      'Avaliação física mensal',
      'App de treinos básico',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 159,
    period: '/mês',
    description: 'O plano mais escolhido pelos nossos alunos',
    features: [
      'Tudo do plano Basic',
      'Aulas coletivas ilimitadas',
      'Personal trainer 2x/semana',
      'Acompanhamento nutricional',
      'Acesso 24 horas',
      'Armário exclusivo',
    ],
    popular: true,
  },
  {
    name: 'Black',
    price: 299,
    period: '/mês',
    description: 'A experiência fitness definitiva',
    features: [
      'Tudo do plano Premium',
      'Personal trainer ilimitado',
      'Spa e sauna premium',
      'Estacionamento VIP',
      'Área lounge exclusiva',
      'Convidados 4x/mês',
      'Prioridade em aulas',
    ],
    popular: false,
  },
]

export function PlansSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planos" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Planos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Invista no seu <span className="text-primary">melhor eu</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para seus objetivos. Todos incluem acesso às melhores 
            instalações e suporte profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-green' 
                  : 'bg-card border border-border hover:border-primary/30'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contato"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 group ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:glow-green-strong'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Assinar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
