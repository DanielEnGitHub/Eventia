import { Box } from "@chakra-ui/react";
import FontText from "./FontText";

const Logo = () => {
  return (
    <Box bgColor="brand.bgWhite" minH="100vh">
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
          bottom="2"
          left="50%"
          transform="translateX(-50%)"
        >
          Raul
        </FontText>
      </Box>
    </Box>
  );
};

export default Logo;
