import { Text } from "@chakra-ui/react";

const FontText = ({ children = "title", ...props }) => {
  return (
    <Text
      fontSize="title"
      className="arizonia-font"
      color="landing.primary"
      userSelect="none"
      lineHeight="1"
      {...props}
    >
      {children}
    </Text>
  );
};

export default FontText;
