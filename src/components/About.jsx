import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {FaWhatsapp} from 'react-icons/fa'
import React from "react";
import phone from "../assets/Imagies/phone.png";
import rich from "../assets/Imagies/rich.jpg"

const About = () => {
  return (
    <SimpleGrid
      minChildWidth="250px"
      padding="0px 40px"
      marginTop="2rem"
      alignItems="center"
    >
      <Box h="570px" alignItems="center" textAlign="start">
        <Text
          as="p"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="extrabold"
          color="blackAlpha.900"
          alignItems="center" 
          textAlign="center"
        >

          Sell Gift Cards & Cryptocurrencies for Instant Cash.
          <div className="flex">
          <img src={rich} width="100px" height="100px" />
          </div>
        
        </Text>
      
        <Text
          as="p"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="blackAlpha.900"
        >
          <p>
            Great Exchange provides effortless means of trading all Giftcards
            and Cryptocurrencies
          </p>
        </Text>
        <div className="flex">
        <button className="btn">Start Trading
         <FaWhatsapp/>
         </button>
        </div>
       
       
      </Box>

      <Box h="200px">
        <img src={phone} width="90%"></img>
      </Box>
    </SimpleGrid>
  );
};

export default About;
