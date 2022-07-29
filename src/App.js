
import './App.css';


import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Pricing from './Component/Pricing'
import Training from './Component/Training'
import Contact from './Component/Conctact'




// THIS IS ANOTHER WAY TO BUILD ROUTER-DOM

// THE { BrowserRouter}  IS INSIDE OUR INDEX.JS

const App = () => {
  return (
    <>
      <Routes>
      <Route  path="/" element={ <Home/> }/>
      <Route  path="/pricing" element={ <Pricing/> }/>
      <Route  path="/training" element={ <Training/> }/>
      <Route  path="/contact" element={ <Contact/> }/>
     </Routes> 
    </>
  )
}

export default App




//  THIS IS ONE OF THE STEP OF BUILDING A REACT ROUTER DOM BELOW!


// import './App.css';


// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Component/Home';
// import About from './Component/About';
// import Profile from './Component/Profile';
// import Contact from './Component/Conctact';
// import Footer from './Component/Footer';
// import Nav from './Component/Nav';

// const App = () => {
//   return (
//     <Router>
//       <Nav/> 
//       <Routes>
//       <Route  path="/" element={ <Home/> }/>
//       <Route path="/about" element={ <About/> }/>
//       <Route  path="/profile" element={ <Profile/> }/>
//       <Route path="/contact" element={ <Contact/> }/>
//      </Routes> 
//       Footer
//     </Router>
//   )
// }

// export default App






