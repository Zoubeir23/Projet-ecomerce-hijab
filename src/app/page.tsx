import SimpleHeader from '@/components/layout/SimpleHeader'
import FeaturedProductsFixed from '@/components/home/FeaturedProductsFixed'

export default function Home() {
  return (
    <div>
      <SimpleHeader />
      <FeaturedProductsFixed />
      <div className="text-center my-5">
        <h1>Hijab Élégance Dakar</h1>
        <p>Votre boutique de mode islamique au Sénégal</p>
      </div>
    </div>
  )
}