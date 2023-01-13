import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import { AnimatePresence } from 'framer-motion'
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt'


const AnimatedRoutes = () => {

const location = useLocation();


return (
    
    <AnimatePresence>
        <Routes location={location} key={location.pathname} >
            <Route path='/' element={<Home />}/>
            <Route path='/encrypt' element={<Encrypt />}/>
            <Route path='/decrypt' element={<Decrypt />}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes