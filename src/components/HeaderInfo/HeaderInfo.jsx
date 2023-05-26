import { Box, Flex, Text } from "@chakra-ui/react";

const HeaderInfo = () => {
  return (
    <Flex alignItems="center" gap="3" mb="20">
      <Text color="landing.secondary" fontSize="4xl">
        Sábado
      </Text>

      <Box w="3px" h="10" bgColor="landing.secondary" />

      <Flex flexDir="column" alignItems="center" px="3">
        <Text color="landing.secondary" fontSize="2xl" lineHeight="1">
          Julio
        </Text>
        <Text
          color="landing.secondary"
          fontSize="4xl"
          fontWeight="bold"
          lineHeight="1"
        >
          29
        </Text>
      </Flex>

      <Box w="3px" h="10" bgColor="landing.secondary" />

      <Text color="landing.secondary" fontSize="4xl">
        12:00 PM
      </Text>
    </Flex>
  );
};

export default HeaderInfo;
