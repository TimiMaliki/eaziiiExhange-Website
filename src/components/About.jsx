import {
    Box,
    Heading,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import blackHand from "../assets/Imagies/3d.jpg"

const About = () => {
  return (
    <SimpleGrid
      minChildWidth="200px"
      marginTop="2rem"
      alignItems="center"
      padding="80px"
    >
      <Box h="300px" alignItems="center" textAlign="center" placeContent="center">
          <img src={blackHand} alt=""  width="100%" height="200px"/>
      </Box>

      <Box h="200px" alignItems="center" textAlign="center" placeContent="center">

      <Text as="h3" fontSize="4xl" fontWeight="bold" marginBottom="3rem" >
      We Buy Your Gift Cards & Crypto Currencies For Instant Cash.
      </Text>
           <Text as="p" fontSize="2xl">
           We buy Apple iTunes, Google Play, Nordstorm, Steam, Sephora, Amazon, Walmart, Visa, American Express and a lot more from various brands and countries.
           </Text>
      </Box>
    </SimpleGrid>
  );
};

export default About;
