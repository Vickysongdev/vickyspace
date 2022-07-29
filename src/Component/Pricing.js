import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Heroimage from './Heroimage'
import Pricings from './Pricings'




function Pricing() {
  return (
    <div>
     <Nav/>
     <Heroimage heading="PRICING." text="Choose yiur trip."/>
     <Pricings/>
     <Footer/>
    </div>
  )
}

export default Pricing