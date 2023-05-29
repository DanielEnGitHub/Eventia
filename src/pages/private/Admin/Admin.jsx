import {
  Box,
  Button as ButtonChakra,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import HeaderAdmin from "../../../components/HeaderInfo/HeaderAdmin";
import Subtitle from "../../../components/Texts/Subtitle/Subtitle";
import TextContent from "../../../components/Texts/TextContent/TextContent";
import Card from "../../../components/Card";

const Admin = () => {
  return (
    <>
      <Box p="0" m="0">
        <HeaderAdmin
          title="INVITADOS"
          textButton="Agregar Invitado"
          showButton
          onClick={() => {}}
        />

        <Container maxW={"full"} p="0" mt={12}>
          <Flex flexWrap="wrap" gridGap={15} justify="center">
            <Card
              family="Familia Gallina"
              invitationCode="EYR001"
              tableNumber="1 Y 2"
            />

            <Card
              family="Familia Perez"
              invitationCode="EYR001"
              tableNumber="1 Y 2"
            />

            <Card
              family="Familia Valencia"
              invitationCode="EYR001"
              tableNumber="1 Y 2"
            />

            <Card
              family="Familia Dominguez"
              invitationCode="EYR001"
              tableNumber="1 Y 2"
            />
            <Card
              family="Familia Villa"
              invitationCode="EYR001"
              tableNumber="1 Y 2"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Admin;
