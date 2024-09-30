import Services from '../services/Services'
import { Banner, LandingPage, Testimonial } from '../../components'
import textimonialData from "../../data/textimonialData.json"

function Home() {
  return (
    <>
      <LandingPage />
      <Services />
      <Banner />
      <Testimonial testimonials={textimonialData} />
    </>
  )
}

export default Home
