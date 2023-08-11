import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Misconcept = () => {
  return (
    <Text
      display={{ base: "grid", md:"flex" , lg:"flex"}}
      justifyContent={{ md:"space-between",lg:"space-between"}}
      textAlign={{base:"center", md:"center", lg:"center"}}
      alignItems="item"
      placeContent={{base:"center", md:"center"}}
       padding="0px 60px"
       marginTop={{base:"7rem" , md: "7rem", lg:"4rem"}}
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
{
  /* <div className="mis">
//       <div className="conduct">
//         <h2>5mins</h2>
//         <p>Delay</p>
//       </div>

//       <div>
//         <h2>0</h2>
//         <p>scamming report</p>
//       </div>

//       <div>
//         <h2>0</h2>
//         <p>ripping</p>
//       </div>
//    </div> */
}
