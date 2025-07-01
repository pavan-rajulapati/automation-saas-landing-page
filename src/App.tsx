import Layout from "./components/Layout"
import AboutUs from "./components/sections/AboutUs"
import Brands from "./components/sections/Brands"
import CallToAction from "./components/sections/CallToAction"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
import Services from "./components/sections/Services"

const App = () => {
  return (
    <Layout title="Cloud">
      <Hero/>
      <Brands/>
      <Services/>
      <AboutUs/>
      <Pricing/>
      <CallToAction/>
    </Layout>
  )
}

export default App