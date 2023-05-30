import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import HeaderAdmin from "../../../components/HeaderInfo/HeaderAdmin";
import Card from "../../../components/Card";

const Admin = () => {
  return (
    <>
      <Box p="0 10px 0 10px" m="0">
        <HeaderAdmin title="INVITADOS" textButton="Agregar Invitado" />

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
