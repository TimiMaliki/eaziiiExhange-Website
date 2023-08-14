import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import blackHand from "../assets/Imagies/3d.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <SimpleGrid
      minChildWidth="250px"
      marginTop="2rem"
      alignItems="center"
      padding="50px"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <Box
        h="400px"
        alignItems="center"
        textAlign="center"
        placeContent="center"
      >
        <img src={blackHand} alt="" width="100%" height="200px" />
      </Box>

      <Box
        h="550px"
        alignItems="center"
        textAlign="center"
        placeContent="center"
      >
        <Text as="h3" fontSize="4xl" fontWeight="bold" marginBottom="3rem">
          We Buy Your Gift Cards & Crypto Currencies For Instant Cash.
        </Text>
        <Text as="p" fontSize="2xl">
          We buy Apple iTunes, Google Play, Nordstorm, Steam, Sephora, Amazon,
          Walmart, Visa, American Express and a lot more from various brands and
          countries.
        </Text>
        <Text
          display="flex"
          marginTop="1rem"
          fontSize="4xl"
          alignItems="start"
          textAlign="start"
          placeContent="start"
          cursor="pointer"
          gap="1rem"
        >
          <FaWhatsapp color="purple" />
          <FaInstagram color="purple" />
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default About;
