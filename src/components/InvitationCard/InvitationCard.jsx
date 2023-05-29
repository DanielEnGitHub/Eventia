import Atropos from "atropos/react";
import "atropos/atropos.css";
import "./styles.css";
import Logo from "./Logo";
import { Box, Text } from "@chakra-ui/react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";

const InvitationCard = () => {
  return (
    <Box mt="10">
      <Atropos
        className="atropos"
        shadow={false}
        highlight={false}
        // onEnter={() => console.log("enter")}
      >
        <Box
          bgColor="landing.background"
          w="100%"
          h="100%"
          atropos-offset="0"
          borderRadius="md"
        />

        <Text
          fontSize="xl"
          color="brand.green"
          position="absolute"
          top="10"
          left="40"
          data-atropos-offset="10"
        >
          Nombr general, Con gran alegría, te invitamos a nuestra boda
        </Text>
        <Logo />

        <HeaderInfo position="absolute" bottom="5" left="60" data-atropos-offset="10" mb="0" />
      </Atropos>
    </Box>
  );
};

export default InvitationCard;
