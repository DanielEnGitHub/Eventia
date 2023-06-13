import { Box, Flex, Text } from "@chakra-ui/react";

const HeaderInfo = ({ ...props }) => {
  return (
    <Flex
      alignItems="center"
      gap={{ base: "2", md: "3" }}
      mb={{ base: "10", md: "20" }}
      {...props}
      pt={{ base: 10, md: 0 }}
    >
      <Text color="landing.secondary" fontSize={{ base: "3xl", md: "4xl" }}>
        Sábado
      </Text>

      <Box w="3px" h="10" bgColor="landing.secondary" />

      <Flex flexDir="column" alignItems="center" px={{ base: "2", md: "3" }}>
        <Text color="landing.secondary" fontSize="2xl" lineHeight="1">
          Julio
        </Text>
        <Text
          color="landing.secondary"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="1"
        >
          29
        </Text>
      </Flex>

      <Box w="3px" h="10" bgColor="landing.secondary" />

      <Text color="landing.secondary" fontSize={{ base: "3xl", md: "4xl" }}>
        11:40 PM
      </Text>
    </Flex>
  );
};

export default HeaderInfo;
