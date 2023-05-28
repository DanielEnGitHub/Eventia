import { Box } from "@chakra-ui/react";
import FontText from "./FontText";
import Atropos from "atropos/react";
import "./Logo.css";

const Logo = ({ atropos = true }) => {
  return atropos ? (
    <Atropos
      className="atropos-logo"
      shadow={false}
      // highlight={false}
      // onEnter={() => console.log("enter")}
    >
      <Box
        bgColor="landing.secondaryLight"
        w="340px"
        h="340px"
        borderRadius="100%"
        position="absolute"
        data-atropos-offset="0"
      />
      <FontText position="absolute" top="2" left="2" data-atropos-offset="5">
        Ester
      </FontText>
      <FontText
        position="absolute"
        fontSize="6xl"
        top="45%"
        left="43%"
        color="landing.secondary"
        //   transform="translate(-50%, -50%)"
        data-atropos-offset="10"
      >
        &
      </FontText>
      <FontText
        position="absolute"
        bottom="2"
        left="5"
        // transform="translateX(-50%)"
        data-atropos-offset="5"
      >
        Raul
      </FontText>
    </Atropos>
  ) : (
    <Box
      bgColor="landing.secondaryLight"
      w="340px"
      h="340px"
      borderRadius="100%"
      position="relative"
    >
      <FontText
        position="absolute"
        top="2"
        left="50%"
        transform="translateX(-50%)"
      >
        Ester
      </FontText>
      <FontText
        position="absolute"
        fontSize="6xl"
        top="50%"
        left="50%"
        color="landing.secondary"
        transform="translate(-50%, -50%)"
      >
        &
      </FontText>
      <FontText
        position="absolute"
        bottom="4"
        left="50%"
        transform="translateX(-50%)"
      >
        Raul
      </FontText>
    </Box>
  );
};

export default Logo;
