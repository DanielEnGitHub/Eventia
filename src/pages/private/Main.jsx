import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/Layout/SideBar";

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

      <GridItem area={"main"} maxHeight="100vh" overflow="auto" px="2" mb="5">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Main;
