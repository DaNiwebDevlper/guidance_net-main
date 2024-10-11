import { Banner, LandingPage, Testimonial } from '../../components'
import textimonialData from "../../data/textimonialData.json"
import ServicesPage from '../services/ServicesPage'

function Home() {
  return (
    <>
      <LandingPage />
      <ServicesPage />
      <Banner />
      <Testimonial testimonials={textimonialData} />
    </>
  )
}

export default Home
