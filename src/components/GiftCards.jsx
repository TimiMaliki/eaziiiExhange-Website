import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import walletCoin from "../assets/Imagies/walletcoin.gif";

const GiftCards = () => {
  return (
    <SimpleGrid minChildWidth="250px" padding="0px 30px" gap="3rem" bg="gray.100" minHeight="100vh">
      <img
        src={walletCoin}
        width="100%"
        height="200px"
        style={{ borderRadius: "14px", marginTop:"6rem"}}
      />
      <Box height="400px"  textAlign="center" marginTop="2rem">
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
      </Box>
    </SimpleGrid>
  );
};

export default GiftCards;
