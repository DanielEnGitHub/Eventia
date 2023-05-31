import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/Layout/SideBar";
import { Ilogout } from "../../utils/Utils";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

const Main = ({ children }) => {
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"side main"`,
        lg: `"side main"`,
      }}
      gridTemplateRows={"1fr"}
      gridTemplateColumns={{
        md: "90px 1fr",
      }}
      maxHeight="100vh"
      gap="5"
      // color="blackAlpha.700"
    >
      {/* ----Grid item for sidebar---- */}
      <SideBar area={"side"} variant={variants?.navigation} />

      <Box
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"brand.secondary"}
        position={"absolute"}
        bottom="5"
        right="5"
        className="hide"
      >
        <Center h="full">
          <Image src={Ilogout} w="25px" />
        </Center>
      </Box>

      <GridItem area={"main"} maxHeight="100vh" overflow="auto" px="2" mb="5">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Main;
