import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, toggleSidebar } from "../../redux/features/sidebarSlice";
import SideBarContent from "./SideBarContent";

const SideBar = ({ variant, area }) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectSidebar);

  const onClose = () => dispatch(toggleSidebar());

  return variant === "sidebar" ? (
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
  ) : (
    <Drawer isOpen={isSidebarOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Eventia</DrawerHeader>
          <DrawerBody>
            <SideBarContent onMobile />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SideBar;
