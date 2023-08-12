import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import chat from "../assets/Imagies/chat.jpg";
import secure from "../assets/Imagies/secure.jpg";
import friend from "../assets/Imagies/friend.jpg";
import rate from "../assets/Imagies/rate.jpg";

const Secure = () => {
  return (
  
    <SimpleGrid minChildWidth="250px" p="0px 40px" gap="1rem" marginTop="4rem">
      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={secure} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Secure & Safe 💯</CardBody>

        <CardBody>
          Eazi exchange assures you Safety, Security, and Transparency when
          trading your Digital assets with us with
        </CardBody>
      </Card>

      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={chat} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>
          Customer Interaction
          <br />& Satisfaction 🙂
        </CardBody>

        <CardBody>
          All customers at Great Exchange has the right and access to a great
          trading experience "Our customer is our success"
        </CardBody>
      </Card>

      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={rate} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Great Rates & Swift Payout 🏃💨</CardBody>

        <CardBody>
          Definitely our rates for all Giftcards and cryptocurrencies are high
          not leaving out our fast payment system
        </CardBody>
      </Card>

      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={friend} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Beginner Friendly 😊</CardBody>

        <CardBody>
          At Great Exchange all our Trading means has been designed by our I.T
          experts to be accessible easily enabling effortless trades and an
          outstanding trading experience
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default Secure;
