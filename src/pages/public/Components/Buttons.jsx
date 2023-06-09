import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../../../components/Buttons/Button";

const Buttons = () => {
  return (
    <Stack
      spacing={4}
      mb={3}
      alignItems={"start"}
      width={{ base: "100%", md: "auto" }}
    >
      <Text fontSize="2xl" color={"brand.black"} fontWeight={"bold"}>
        Botones
      </Text>
      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        width={{ base: "100%", md: "auto" }}
      >
        <Text
          fontSize="lg"
          fontWeight={"normal"}
          color={"brand.gray"}
          mb={2}
          width={"180px"}
        >
          Botones
        </Text>
        <Button text="Primary" primary />
        <Button text="Secondary" secondary />
        <Button text="Green" green />
      </Stack>

      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        width={{ base: "100%", md: "auto" }}
      >
        <Text
          fontSize="lg"
          fontWeight={"normal"}
          color={"brand.gray"}
          mb={2}
          width={"180px"}
        >
          Botones desactivados
        </Text>
        <Button text="Disabled" primary disabled />
        <Button text="Disabled" secondary disabled />
        <Button text="Disabled" green disabled />
      </Stack>

      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        width={{ base: "100%", md: "auto" }}
      >
        <Text
          fontSize="lg"
          fontWeight={"normal"}
          color={"brand.gray"}
          mb={2}
          width={"180px"}
        >
          Botones carga
        </Text>
        <Button text="Loading" primary isLoading textLoading="Loading..." />
        <Button text="Loading" secondary isLoading textLoading="Loading..." />
        <Button text="Loading" green isLoading textLoading="Loading..." />
      </Stack>
    </Stack>
  );
};

export default Buttons;
