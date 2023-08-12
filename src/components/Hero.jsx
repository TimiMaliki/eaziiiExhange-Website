import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import whatsapp from "../assets/Imagies/whatsapp.jpg";

const Hero = () => {
  return (
    <SimpleGrid
      minChildWidth="250px"
      padding="0px 40px"
      alignItems="center"
      bg="whiteAlpha.800"
      marginTop="5rem"
    >
      <Box h="570px" alignItems="center" textAlign="center">
        <Text
          as="p"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="extrabold"
          color="blackAlpha.900"
          alignItems="center"
          textAlign="center"
        >
          Sell Gift Cards & Cryptocurrencies for Instant Cash. 🤑
        </Text>

        <Text
          as="p"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="blackAlpha.900"
          marginBottom="1rem"
        >
          <p>
            Eazi Exchange provides effortless means of trading all Giftcards
            and Cryptocurrencies
          </p>
        </Text>
        <div className="flex">
          <button className="btn">
            Start Trading
            <FaWhatsapp />
          </button>
        </div>
      </Box>

      <Box h="400px">
        <img src={whatsapp} width="90%"></img>
      </Box>
    </SimpleGrid>
  );
};

export default Hero;
