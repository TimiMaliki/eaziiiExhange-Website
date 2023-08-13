import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import walletCoin from "../assets/Imagies/walletcoin.gif";
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'

const GiftCards = () => {
  return (
    <SimpleGrid minChildWidth="250px" padding="0px 30px" gap="3rem" bg="gray.100" minHeight="120vh">
      <img
        src={walletCoin}
        width="100%"
        height="200px"
        style={{ borderRadius: "14px", marginTop:"6rem"}}
      />
      <Box height="490px"  textAlign="center" marginTop="2rem">
        <Text
          as="h2"
          textAlign="center"
          marginTop="6rem"
          fontSize="5xl"
          textColor="black"
        >
        Exchange Giftcards
        </Text>
        <Text fontSize="2xl" textColor="black">
        Eazi Exchange offers you a secure way to trade
          your gift cards to physical cash giving you detailed guides lines and
          great rates.
        </Text>
        <Text display="flex" marginTop="1rem" fontSize="4xl" alignItems="center" textAlign="center" placeContent="center" cursor="pointer" gap="1rem">
           <FaWhatsapp color="purple"/>
           <FaInstagram color="purple"/>
           </Text>
      </Box>
    </SimpleGrid>
  );
};

export default GiftCards;
