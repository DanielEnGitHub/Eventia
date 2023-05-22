import { Text } from "@chakra-ui/react";

const Subtitle = ({ content, secondary = false }) => {
  return (
    <Text
      fontSize="2xl"
      color={secondary ? "secondary.500" : "brand.black"}
      fontWeight="semibold"
      as="h2"
    >
      {content}
    </Text>
  );
};

export default Subtitle;
