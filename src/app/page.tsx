import Hero from '@/components/home/Hero'
import Navigation from '@/components/layout/Navigation'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Collections from '@/components/home/Collections'
import Testimonials from '@/components/home/Testimonials'
import SpecialOffer from '@/components/home/SpecialOffer'
import Newsletter from '@/components/home/Newsletter'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-vh-100">
      <Navigation />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <SpecialOffer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}