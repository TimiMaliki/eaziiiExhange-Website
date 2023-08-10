import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import phone from "../assets/Imagies/phone.png";
import rich from "../assets/Imagies/rich.jpg"

const About = () => {
  return (
    <SimpleGrid
      minChildWidth="300px"
      p="10px"
      marginTop="2rem"
      alignItems="center"
      marginBottom="2rem"
    >
      <Box h="430px" alignItems="center" textAlign="center">
        <Text
          as="p"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="extrabold"
          color="blackAlpha.900"
        >

          Sell Gift Cards & Cryptocurrencies for Instant Cash.
        </Text>
        <img src={rich} width="100px" height="100px" />
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
         <button className="btn">Start Trading</button>
       
      </Box>

      <Box h="200px">
        <img src={phone} width="80%"></img>
      </Box>
    </SimpleGrid>
  );
};

export default About;
