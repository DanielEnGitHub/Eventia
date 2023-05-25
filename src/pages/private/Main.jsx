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
        base: `"nav"
              "main"`,
        md: `"side main"`,
        lg: `"side main sideright"`,
      }}
      gridTemplateRows={"100px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        md: "90px 1fr",
        lg: "90px 1fr 320px",
        xl: "90px 1fr 450px",
      }}
      maxHeight="100vh"
      gap="5"
      // color="blackAlpha.700"
    >
      {/* ----Grid item for sidebar---- */}
      <SideBar area={"side"} variant={variants?.navigation} />

      <GridItem area={"main"} maxHeight="86vh" overflow="auto" px="2" mb="5">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Main;
