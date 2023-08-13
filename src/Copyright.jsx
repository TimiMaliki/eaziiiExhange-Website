import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Copyright = () => {
  return (
      <SimpleGrid minChildWidth="250" bg="black">

<Box textAlign="center"
alignContent="center" textColor="gray.900" fontSize="25px"
height="60px">
<div>
    &copy;EaziExchange 2023
 </div>
</Box>
 
      </SimpleGrid>
  )
}

export default Copyright
