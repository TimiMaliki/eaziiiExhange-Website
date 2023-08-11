import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex
      as="nav"
      p="20px"
      alignItems="center"
      textAlign="center"
      justify="space-between"
      position="sticky"
      borderRadius="14px"
    >
      <Heading as="h1" cursor="pointer">
        EaziExchange
      </Heading>

     
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
   
<ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
      </ul>
      

 
  
      
    </Flex>
  );
};

export default Navbar;
