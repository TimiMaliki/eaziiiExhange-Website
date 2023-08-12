import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <SimpleGrid minChildWidth="250px" bg="black">
      <Box height="300px" textAlign="center" alignItems="center" marginTop="4rem">
        <Heading textColor="white" fontSize="4xl" fontWeight="bold">About</Heading>
        <Text color="gray.100">
          We buy & sell Bitcoin and Giftcards such as Apple iTunes, Google Play,
          Nordstorm, Steam, Sephora, Amazon, Walmart, Visa, American Express and
          a lot more from various brands and
        </Text>
        <Text display="flex" marginTop="1rem" fontSize="4xl" alignItems="center" textAlign="center" placeContent="center" cursor="pointer" gap="1rem">
           <FaWhatsapp color="purple"/>
           <FaInstagram color="purple"/>
           </Text>
      </Box>

      <Box height="300px" textAlign="center" alignItems="center" marginTop="4rem">
        <Heading  textColor="white" fontSize="4xl" fontWeight="bold">Navigations</Heading>
        <Text color="gray.100">
          Back to Homepage About Us Our Services Features of our offers Get in
          touch Frequently Ask Questions Terms and Conditions
        </Text>
      </Box>
      <Box height="300px" textAlign="center" alignItems="center" marginTop="4rem">
        <Heading textColor="white" fontSize="4xl" fontWeight="bold">Services</Heading>
        <Text color="gray.100">Cryptocurrencies Giftcards Rates Consultations</Text>
      </Box>
      <Box height="300px" textAlign="center" alignItems="center" marginTop="4rem">
        <Heading  textColor="white" fontSize="4xl" fontWeight="bold">Have any Complaints?</Heading>
        <Text color="gray.100">+234 701 066 2232 infogreatexchange1@gmail.com</Text>
      </Box>
    </SimpleGrid>
  );
};

export default Footer;
