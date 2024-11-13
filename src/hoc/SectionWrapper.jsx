//rafce run it after installing es7-react code snipet extension
import React from 'react'
import { motion } from 'framer-motion'
import {styles } from '../styles'
import { staggerContainer } from '../utils/motion'  

// because this is a function returning another function it is a higher order component
const SectionWrapper = (Component, idName) => 
function HOC() {
    return(
        <motion.section
        variants={staggerContainer()}
        initial = "hidden"
        whileInView="show"
        viewport={{once: true, amount:0.25}}
        // this type of calling the classname is called dynamic calling
        className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
        
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper
