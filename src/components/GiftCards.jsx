import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import gift from "../assets/Imagies/gift.jpg";

const GiftCards = () => {
  return (
    <SimpleGrid minChildWidth="250px" padding="0px 50px" gap="3rem" bg="black">
      <img
        src={gift}
        width="100%"
        height="400px"
        style={{ borderRadius: "14px" }}
      />
      <Box height="400px" marginTop="5rem" textAlign="center">
        <Text
          as="h2"
          textAlign="center"
          marginTop="4rem"
          fontSize="5xl"
          textColor="white"
        >
          Buy & Sell Bitcoin 🪙
        </Text>
        <Text fontSize="2xl" textColor="white">
          Exchange Giftcards Great Exchange offers you a secure way to trade
          your gift cards to physical cash giving you detailed guides lines and
          great rates.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default GiftCards;
