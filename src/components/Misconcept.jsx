import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Misconcept = () => {
  useEffect(() => {
    Aos.init({ duration:1000});
  },[])
  return (
    <Text
      display={{ base: "grid", md:"flex" , lg:"flex"}}
      justifyContent={{ md:"space-between",lg:"space-between"}}
      textAlign={{base:"center", md:"center", lg:"center"}}
      alignItems="item"
      placeContent={{base:"center", md:"center"}}
       padding="0px 60px"
       marginTop={{base:"7rem" , md: "7rem", lg:"4rem"}}
       data-aos="fade-in"
       data-aos-delay="100" 
       data-aos-duration="600"
    >
      <Text marginBottom="3rem">
        <Text fontSize="5xl" fontWeight="extrabold">5mins</Text>
        <Text fontSize="3xl" fontWeight="bold">Delay</Text>
      </Text>


      <Text marginBottom="3rem">
        <Text fontSize="5xl" fontWeight="extrabold">0</Text>
        <Text fontSize="3xl" fontWeight="bold">scamming report</Text>
      </Text>


      <Text marginBottom="3rem">
        <Text fontSize="5xl" fontWeight="extrabold">0</Text>
        <Text fontSize="3xl" fontWeight="bold"> ripping</Text>
      </Text>



    </Text>
  );
};

export default Misconcept;
