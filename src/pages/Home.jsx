
import React from 'react'
import { motion } from 'framer-motion'
import Keto from '../components/Keto'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Paleo from '../components/Paleo'
import Whole30 from '../components/Whole30'
import Mediterranean from '../components/Mediterranean'




function Home () {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transiton={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
      <Paleo />
      <Keto />
      <Whole30 />
      <Mediterranean />
    </motion.div>
  )
}

export default Home
