import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import Subtitle from "../Texts/Subtitle/Subtitle";
import TextContent from "../Texts/TextContent/TextContent";

const Card = ({ family, invitationCode, tableNumber }) => {
  return (
    <Box
      maxW={{ base: "full", xl: "49%" }}
      h={"400px"}
      w={"full"}
      boxShadow="card"
      borderWidth="1px"
      borderRadius="24px"
      p={5}
    >
      <Grid
        h="full"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <GridItem colSpan={3}>
          <Stack h="full" justifyContent="center">
            <Subtitle content={family} />
            <TextContent content={`Mesa: ${tableNumber}`} blue />
          </Stack>
        </GridItem>
        <GridItem colSpan={3}>
          <Stack h="full" alignItems="end">
            <Subtitle content={invitationCode} />
          </Stack>
        </GridItem>
        <GridItem rowSpan={3} colSpan={6}>
          <Stack justifyContent="center" alignItems="center" h="full">
            <Subtitle content="Tabla" />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Card;
