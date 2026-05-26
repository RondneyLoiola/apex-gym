import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ModalidadesSection } from '@/components/modalidades-section'
import { PlansSection } from '@/components/plans-section'
import { TrainersSection } from '@/components/trainers-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { GallerySection } from '@/components/gallery-section'
import { AppSection } from '@/components/app-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ModalidadesSection />
      <PlansSection />
      <TrainersSection />
      <TestimonialsSection />
      <GallerySection />
      <AppSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
