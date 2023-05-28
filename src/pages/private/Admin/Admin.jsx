import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Title from "../../../components/Texts/Title/Title";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", xl: "48%"}}
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
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

const Admin = () => {
  return (
    <>
      {/* <Title content="EVENTIAS" /> */}

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={""} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Short heading
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet
            officiis.
          </Text>
        </Stack>

        <Container maxW={"full"} mt={12}>
          <Flex flexWrap="wrap" gridGap={10} justify="center">
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
            <Card
              heading={"Heading"}
              icon={<EmailIcon />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Admin;
