import { Box } from "@chakra-ui/react";
import FontText from "../Logo/FontText";

const Logo = () => {
  return (
    <>
      <Box
        bgColor="landing.secondaryLight"
        w="340px"
        h="340px"
        top="32"
        left="60"
        borderRadius="100%"
        position="absolute"
        data-atropos-offset="-5"
      />
      <FontText
        position="absolute"
        top="32"
        left="64"
        //   left="50%"
        // transform="translateX(-50%)"
        data-atropos-offset="5"
      >
        Ester
      </FontText>
      <FontText
        position="absolute"
        fontSize="6xl"
        top="270px"
        left="380px"
        color="landing.secondary"
        //   transform="translate(-50%, -50%)"
        data-atropos-offset="-5"
      >
        &
      </FontText>
      <FontText
        position="absolute"
        top="320px"
        left="64"
        // transform="translateX(-50%)"
        data-atropos-offset="5"
      >
        Raul
      </FontText>
      ;
    </>
  );
};

export default Logo;
