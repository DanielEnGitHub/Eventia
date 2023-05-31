import { Box, Center, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import TableComponent from "../Tables/Table";
import Subtitle from "../Texts/Subtitle/Subtitle";
import TextContent from "../Texts/TextContent/TextContent";

const Card = ({
  family,
  invitationCode,
  tableNumber,
  registered,
  data = [],
}) => {
  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "#",
          accessor: (d) => {
            return (
              <Box w="18px">
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  h="45px"
                  w="45px"
                  bgColor="brand.mid"
                  borderRadius="6px"
                  m="6px 0 6px 0"
                >
                  <Text>{d.id}</Text>
                </Stack>
              </Box>
            );
          },
        },
        {
          Header: "Nombres",
          accessor: (d) => {
            return (
              <Text w={{ base: "200px", md: "250px" }} pl="40px">
                {d.full_name}
              </Text>
            );
          },
        },
        {
          Header: "¿Asistira?",
          accessor: (d) => {
            return (
              <Center>
                <Text
                  color={
                    d.attend
                      ? "brand.greenS"
                      : !registered
                      ? "landing.textColor"
                      : "brand.red"
                  }
                >
                  {d.attend
                    ? "Si Asistirá"
                    : !registered
                    ? "Sin Confirmar"
                    : "No Asistirá"}
                </Text>
              </Center>
            );
          },
        },
      ],
    },
  ];

  return (
    <Box
      maxW={{ base: "full", xl: "49%" }}
      h={"400px"}
      w={"full"}
      boxShadow="card"
      borderWidth="1px"
      borderRadius="24px"
      p="35px 45px 35px 45px"
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
          <Stack p="0" m="0" h="full" overflow="auto">
            <TableComponent columns={columns} data={data} />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Card;
