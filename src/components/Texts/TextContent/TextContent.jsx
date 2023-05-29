import React from "react";
import { Text } from "@chakra-ui/react";

const TextContent = ({
  content,
  children,
  gray = false,
  blue = false,
  small = false,
  marginTop = "",
  marginBottom = "",
  fontWeight = "normal",
  className = "",
  mt = "",
  mb = "",
  ml = "",
  mr = "",
  ...props
}) => {
  return (
    <Text
      {...props}
      fontSize={small ? "sm" : "md"}
      color={gray ? "brand.gray" : blue ? "brand.blue" : "brand.black"}
      marginBottom={marginBottom}
      marginTop={marginTop}
      fontWeight={fontWeight}
      className={className}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      {content || children}
    </Text>
  );
};

export default TextContent;
