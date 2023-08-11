import { Divider, Heading } from '@chakra-ui/react'
import React from 'react'

const Prop = ({title}) => {
  return (
  <Heading as="p" marginTop="17rem" placeContent="center" textAlign="center" fontSize="5xl">
   
   <div className='about'>
   {title}
   <div className='divider'></div>
   </div>
  </Heading>
  )
}

export default Prop