import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Heroimage from './Heroimage'
import Form from './Form'

function Conctact() {
  return (
    <div> 
      <Nav/>
      <Heroimage  heading="CONTACT." text="Contact VickyTech"/>
      <Form/>
      <Footer/>

   </div>
  )
}

export default Conctact