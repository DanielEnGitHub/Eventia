import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Button from "../../Buttons/Button/Button";
import Subtitle from "../../Texts/Subtitle/Subtitle";

const HeaderAdmin = ({
  title,
  showButton = false,
  textButton = "Click",
  onClick = () => {},
}) => {
  return (
    <Container
      maxW={"full"}
      mt={12}
      className="bg-image"
      w="full"
      borderRadius="13px"
      minH="105px"
    >
      <Flex
        flexWrap="wrap"
        minH="105px"
        w="full"
        justifyContent="center"
        p="0 15px 0 15px"
      >
        <Box
          maxW={{ base: "full", sm: showButton ? "50%" : "full" }}
          minH="105px"
          w="full"
        >
          <Stack justifyContent="center" h="100%" color="brand.white">
            <Subtitle content={title} />
          </Stack>
        </Box>

        {showButton && (
          <Box maxW={{ base: "full", sm: "50%" }} minH="105px" w="full">
            <Stack
              justifyContent="center"
              alignItems={{ base: "start", sm: "end" }}
              h="100%"
            >
              <Button
                isLoading={false}
                primary
                text={textButton}
                type="submit"
                color="brand.primary"
                onClick={onClick}
              />
            </Stack>
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default HeaderAdmin;
