import React from 'react'
import Aux from './hoc/Aux'
import { motion } from 'framer-motion'

const FourZeroFour = (props) => (

    <Aux>
        <div>
            <motion.img initial={{ x: 350 }} animate={{ x: 0, rotate: [0, 180, 180, 360] }} transition={{ duration: 0.5 }} src="/img/4.jpeg"></motion.img>
            <motion.img initial={{ x: 350 }} animate={{ x: 0 }} transition={{ duration: 1.0 }} img src="/img/0.png"></motion.img>
            <motion.img initial={{ x: 350 }} animate={{ x: 0 }} transition={{ duration: 1.5 }} img src="/img/4_2.jpeg"></motion.img>
        </div>
    </Aux>
)

export default FourZeroFour