import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <SimpleGrid  alignItems="center" textAlign="center">
    <Accordion allowToggle marginTop="7rem" padding={{base:"0px 50px" , md:"0px 50px" ,lg:"0px 100px"}} height="560px" 
    alignItems="center" textAlign="center"
    >
      <AccordionItem
        border="2px solid black"
        borderRadius="0.2rem"
        marginBottom="1rem"
        bg="gray.100"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
            How does it work?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
       
Simply click on the Start Trading button on the home page and you will be directed to a chat on Whatsapp with our customer service agent where you can ask for
 rate and trade your gift cards instantly.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem
        border="2px solid black"
        borderRadius="0.2rem"
        marginBottom="1rem"
        bg="gray.100"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
            What's your payment duration?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Normally all payments are made immediately after confirmation 
        of (valid) giftcards or cryptocurrencies
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem
        border="2px solid black"
        borderRadius="0.2rem"
        marginBottom="1rem"
        bg="gray.100"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
            Why do you trade on Whatsapp?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Based on experience, we have noticed that people prefer a man-to-man (virtual communication) for trading their gift cards. Hence we provide the 
        best customer service via Whatsapp.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem
        border="2px solid black"
        borderRadius="0.2rem"
        marginBottom="1rem"
        bg="gray.100"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
            What are the Giftcards rates?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Due to fluctuations in rates to get the current rate of a particular giftcard or asset click here and our
         customer service agents will attend to you
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem
        border="2px solid black"
        borderRadius="0.2rem"
        marginBottom="1rem"
        bg="gray.100"
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
            How can I trust you?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        This is a very common question
         from all new customers and the 
         fact is that you can trust us. 
         We have been running our business
          legitimately over the years and 
          The Eazi Exchange Technologies Limited is registered with the Corporate Affairs Commission
         (CAC) with a Registration number: 1945065.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </SimpleGrid>
  );
};

export default Faq;
