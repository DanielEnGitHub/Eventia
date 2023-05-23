import { GridItem } from "@chakra-ui/react";
import React from "react";
import SideBarContent from "./SideBarContent";

const SideBar = ({ area }) => {
  return (
    <GridItem
      pl="2"
      bg="brand.secondary"
      area={area}
      display={{ base: "none", md: "block" }}
      boxShadow="sidebar"
      w="85px"
      h="100vh"
      borderRadius="0 10px 10px 0"
      color="brand.primary"
    >
      <SideBarContent />
    </GridItem>
  );
};

export default SideBar;
