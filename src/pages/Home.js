import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from "framer-motion"
import './home.css';
import justice from '../images/justice.jpg'
import justice1 from '../images/justice1.jpg'
import example from '../images/example.png'
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <motion.div>
      <div className='maindiv2'>
        <div className="title">
          <div className='caesardiv'>
            <Fade left>
            <p>c</p>
            </Fade>
            <Fade left delay={150}>
            <p>a</p>
            </Fade>
            <Fade left delay={300}>
            <p>e</p>
            </Fade>
            <Fade left delay={450}>
            <p>s</p>
            </Fade>
            <Fade left delay={600}>
            <p>a</p>
            </Fade>
            <Fade left delay={750}>
            <p>r</p>
            </Fade>
            <Fade left delay={900}>
            <p className='qwe'>'</p>
            </Fade>
            <Fade left delay={1150}>
            <p>s</p>
            </Fade>
          </div>
          <div className='cipherdiv'>
            <Fade left delay={1500}>
            <p>c</p>
            </Fade>
            <Fade left delay={1650}>
            <p>i</p>
            </Fade>
            <Fade left delay={1800}>
            <p>p</p>
            </Fade>
            <Fade left delay={1950}>
            <p>h</p>
            </Fade>
            <Fade left delay={2100}>
            <p>e</p>
            </Fade>
            <Fade left delay={2250}>
            <p>r</p>
            </Fade>
          </div>
          <Fade right delay={2350}>
          <img className='justice' src={justice1}></img>
          </Fade>
        </div>
        <div className='textdiv'>
        <Fade left delay={2350}>
          <p className='text'> &nbsp;&nbsp; A Caesar cipher is a simple method of encoding messages. Caesar ciphers use a substitution method where letters in the alphabet are shifted by some fixed number of spaces to yield an encoding alphabet. A Caesar cipher with a shift of 11 would encode an A as a B, an M as an N, and a Z as an A, and so on. The method is named after Roman leader Julius Caesar, who used it in his private correspondence.</p>
        </Fade>
        </div>

        <div className='explaindiv'>
            <Fade bottom>
            <p className='explanation'>02</p>
            </Fade>
            <p className='zxc'>A Caesar Cipher with a shift of 3:</p>
            <Fade top>
            <p className='cvb'>simple steps to encrypt a sentence: </p>
            </Fade>
            <div className='ul'>
            <ul>
              <Fade left delay={500}>
              <li>Choose a shift number.</li>
              </Fade>
              <Fade left delay={700}>
              <li>have an alphabet close by.</li>
              </Fade>
              <Fade left delay={900}>
              <li>write down a sentence.</li>
              </Fade>
              <Fade left delay={1100}>
              <li>select letters one by one from beggining towards end.</li>
              </Fade>
              <Fade left delay={1300}>
              <li>replace it with a letter thats located *shift* letters after.</li>
              </Fade>
            </ul>
            </div>
            <img className='example' src={example}></img>
        </div>
        <div className='morediv'>
          <Fade top delay={1500}>
          <p className='poi'>PRESS BELOW</p>
          </Fade>
        </div>
        <Fade top delay={1000}>
        <div className='linkdiv'>
          <Link className="link" to="/encrypt">click me</Link>
        </div>
        </Fade>
      </div>
   </motion.div>
  )
}

export default Home