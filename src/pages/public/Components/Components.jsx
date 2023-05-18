import { Container, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const Components = () => {
  return (
    <div>
      <VStack>
        <Container maxW="container.xl" centerContent>
          <Text fontSize="4xl" color={"brand.black"} fontWeight={"bold"} mb={5}>
            Components
          </Text>
          <Buttons />
          <Inputs/>
        </Container>
      </VStack>
    </div>
  );
};

export default Components;
