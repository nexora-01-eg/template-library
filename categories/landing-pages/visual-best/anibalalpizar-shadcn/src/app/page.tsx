import { Benefits } from "@/components/sections/Benefits"
import { FAQ } from "@/components/sections/Faq"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { Sponsors } from "@/components/sections/Investors"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero id="top" />
      <Benefits id="benefits" />
      <Sponsors id="investors" />
      <Testimonials id="testimonials" />
      <Pricing id="pricing" />
      <FAQ id="faq" />
      <Footer />
    </div>
  )
}
