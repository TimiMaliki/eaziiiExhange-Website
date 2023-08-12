import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import coin from "../assets/Imagies/coin.jpg";

const Service = () => {
  return (
    <SimpleGrid minChildWidth="250px" padding="0px 30px" gap="3rem" bg="gray.100" marginTop="-4rem">
      <img
        src={coin}
        width="100%"
        height="300px"
        style={{ borderRadius: "14px", marginTop: "8rem" }}
      />
      <Box textAlign="center">
        <Text
          as="h2"
          textAlign="center"
          marginTop="8rem"
          fontSize="5xl"
          textColor="black"
        >
          Buy & Sell Bitcoin 🪙
        </Text>
        <Text fontSize="2xl" textColor="black">
          Crypto Currencies is the future of money, and it is already becoming
          the world's leading industry in terms of market capital, that is why
          we at Geat Exchange are offering you a great means to trade your
          Crypto Currencies.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Service;
