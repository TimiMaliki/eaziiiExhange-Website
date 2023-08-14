import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import giftCard from "../assets/Imagies/giftcards.jpg";
import rich from "../assets/Imagies/rich.jpg";
import pay from "../assets/Imagies/pay.jpg";

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <SimpleGrid minChildWidth="250px" p="0px 40px" gap="1rem" marginTop="4rem"
    data-aos="fade-down"
    data-aos-duration="4000">
      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={rich} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Amazing Deals</CardBody>

        <CardBody>
          You will get a discount anytime you refer a friend to trade with us
        </CardBody>
      </Card>

      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={giftCard} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Sell Various Giftcards at Amazing Rates</CardBody>

        <CardBody>
          We buy Apple Itunes, Amazon Google Play, Nike, Nordstrom, Steam,
          Sephora , Walmart, visa, American express, and lots more from various
          brands and countries
        </CardBody>
      </Card>

      <Card textAlign="center" placeContent="center" position="absolue">
        <CardHeader
          borderRadius="3rem"
          textAlign="center"
          placeContent="center"
        >
          <img src={pay} alt="" width="100%px" height="300px" />
        </CardHeader>

        <CardBody>Fund Store</CardBody>

        <CardBody>
          We also have various means through which you can send in your funds
          for instant exchange such as Cash App, Zelle & Paypal
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default Offers;
