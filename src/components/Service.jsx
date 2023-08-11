import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import wallet from "../assets/Imagies/wallet.jpg";

const Service = () => {
  return (
    <SimpleGrid minChildWidth="250px" padding="0px 50px" gap="3rem" bg="black">
      <img
        src={wallet}
        width="100%"
        height="400px"
        style={{ borderRadius: "14px", marginTop: "4rem" }}
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
