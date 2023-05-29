import {
  Box,
  Button as ButtonChakra,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import HeaderAdmin from "../../../components/HeaderInfo/HeaderAdmin";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", xl: "48%" }}
      h={"400px"}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <ButtonChakra variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </ButtonChakra>
      </Stack>
    </Box>
  );
};

const Admin = () => {
  return (
    <>
      <Box p={4}>
        <HeaderAdmin
          title="INVITADOS"
          textButton="Agregar Invitado"
          showButton
          onClick={() => {}}
        />

        <Container maxW={"full"} mt={12}>
          <Flex flexWrap="wrap" gridGap={10} justify="center">
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Admin;
