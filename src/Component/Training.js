import React from 'react'
import Footer from './Footer'
import Heroimage from './Heroimage'
import Nav from './Nav'
import Trainings from './Trainings'

function Training() {
  return (
    <div>
        <Nav/>
        <Heroimage heading="TRAINING" text="pre-Flight & In-Flight Training." />
        <Trainings/>
        <Footer/>
    </div>
  )
}

export default Training