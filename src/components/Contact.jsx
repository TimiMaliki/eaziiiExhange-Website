import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FaPhone, FaMailBulk, FaArrowAltCircleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <SimpleGrid
      minChildWidth="250px"
      padding="0px 60px"
    >
      <Box
        height="400px"
        textAlign="center"
        placeContent="center"
        alignItems="center"
        marginTop="6rem"
      >
        <Text
          fontSize="3xl"
          textAlign="center"
          marginBottom="2rem"
          fontWeight="bolder"
        >
          Get in Touch
        </Text>

        <Text
          fontSize="2xl"
          alignItems="center"
          fontWeight="bold"
          display="flex"
          justifyContent="space-around"
          textAlign="center"
          placeContent="center"
          marginBottom="2rem"
          gap="2rem"
        >
          <FaPhone color="purple" />
          Phone Number
        </Text>

        <Text
          fontSize="3xl"
          textAlign="center"
          placeContent="center"
          marginBottom="2rem"
        >
          07010662232
        </Text>

        <Text
          fontWeight="bold"
          alignItems="center"
          fontSize="3xl"
          display="flex"
          textAlign="center"
          placeContent="center"
          marginBottom="2rem"
          gap="2rem"
        >
          <FaMailBulk color="purple" />
          Email
        </Text>
        <Text fontSize="3xl" placeContent="center" textAlign="center">
          infogreatexchange1@gmail.com
        </Text>
      </Box>

      <Box height="400px" marginTop="6rem"
      >
        <Text
          fontSize="3xl"
          textAlign="center"
          marginBottom="2rem"
          fontWeight="bolder"
        >
          Send us an email
        </Text>
        <Text>
          <Input placeholder="Name" marginBottom="2rem" variant='filled'></Input>
          <Input placeholder="Email" marginBottom="2rem" variant='filled'></Input>
          <Input placeholder="Subject" marginBottom="2rem" variant='filled'></Input>
          <Input placeholder="Description.." marginBottom="2rem" variant='filled'></Input>
        </Text>

        <Button
          height="45px"
          width="160px"
          colorScheme="purple"
          fontSize="1xl"
          gap="0.2rem"
        >
          Send Message <FaArrowAltCircleRight color="purple" />
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default Contact;
