import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { useLogOut } from "../../hooks/useLogOut";
import { Ilogout, Event } from "../../utils/Utils";
import SideButton from "../Buttons/SideButton";

const SideBarContent = ({ onMobile = false }) => {
  const { logOut } = useLogOut();
  return (
    <Flex
      h="100%"
      flexDirection="column"
      alignItems={!onMobile ? "center" : "flex-start"}
      justifyContent="space-between"
      py={10}
    >
      <VStack gap={6}>
        <SideButton
          icons={{ base: Event, active: Event, alt: "Inicio" }}
          active={true}
          //   onClick={() => {
          //     onClose();
          //     handleClick("home");
          //   }}
          buttonLink
          to="/app"
          onMobile={onMobile}
        />
      </VStack>
      <SideButton
        icons={{
          base: Ilogout,
          active: Ilogout,
          alt: "Cerrar sesion",
        }}
        onClick={logOut}
        // onMobile={onMobile}
      />
    </Flex>
  );
};

export default SideBarContent;
