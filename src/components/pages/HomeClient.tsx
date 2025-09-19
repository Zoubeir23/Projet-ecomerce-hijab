'use client'

import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Categories from '@/components/home/Categories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Footer from '@/components/layout/Footer'

export default function HomeClient() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}