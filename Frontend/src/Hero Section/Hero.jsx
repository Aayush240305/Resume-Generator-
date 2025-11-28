import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Testimonial from './Testimonial.jsx'
import Features from './Features.jsx'
import Contact from './Contact.jsx'

function Hero() {

  return (
    <div>
    < Navbar />
        < Home />
        < Features />
        < Testimonial />
        < Contact />
    </div>
    )
}

export default Hero