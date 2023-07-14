import Hero from "../../components/ui/section/Hero"
import Navbar from "../../components/ui/section/Navbar"
import Header from "../../components/ui/section/Header"
import { Product } from "../../components/ui/section/Product"
import Footer from "../../components/ui/Promo"
import { Newsletter } from "../../components/ui/Newsletter"
import Promo from "../../components/ui/Footer"

export default function Home() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Header />
        <Product />
        <Footer />
        <Newsletter />
        <Promo />
      </div>
    
  )
}

