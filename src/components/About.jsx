import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import phone from "../assets/Imagies/phone.png";

const About = () => {
  return (
    <SimpleGrid  minChildWidth="250px" p="90px" marginTop="2rem" alignItems="center">
      <Box h="280px">
        <Text
          as="p"
          fontSize={{base:"4xl", md:"6xl" , lg:"7xl"}}
          fontWeight="extrabold"
          color="blackAlpha.900"
        >
          Sell Gift Cards & Cryptocurrencies for Instant Cash.
        </Text>
      </Box>

      <Box h="200px">
        <img src={phone} width="80%"></img>
      </Box>
    </SimpleGrid>
  );
};

export default About;

