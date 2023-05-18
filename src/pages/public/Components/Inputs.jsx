import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import InputIcon from "../../../components/Inputs/InputIcon/InputIcon";
import InputSimple from "../../../components/Inputs/InputSimple";

const Inputs = () => {
  const emailIcon = (
    <EmailIcon width="17px" marginLeft="7px" marginTop="6px" color="gray.500" />
  );
  const passIncon = (
    <LockIcon width="17px" marginLeft="7px" marginTop="6px" color="gray.500" />
  );

  return (
    <Stack
      spacing={4}
      mb={3}
      alignItems={"start"}
      width={{ base: "100%", md: "auto" }}
    >
      <Text fontSize="2xl" color={"brand.black"} fontWeight={"bold"}>
        Inputs
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
          Inputs simples
        </Text>
        <InputSimple placeholder="placeholder" />
        <InputSimple placeholder="placeholder disabled" disabled />
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
          Inputs Icon
        </Text>
        <InputIcon placeholder="placeholder" children={emailIcon} />
        <InputIcon
          placeholder="placeholder disabled"
          children={emailIcon}
          disabled
        />
        <InputIcon placeholder="placeholder error" children={emailIcon} error />
        <InputIcon
          placeholder="placeholder succes"
          children={emailIcon}
          success
        />
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
          Inputs Icon Password
        </Text>
        <InputIcon
          placeholder="placeholder"
          children={passIncon}
          type={"password"}
        />
        <InputIcon
          placeholder="placeholder disabled"
          children={passIncon}
          type={"password"}
          disabled
        />
        <InputIcon
          placeholder="placeholder error"
          children={passIncon}
          type={"password"}
          error
        />
        <InputIcon
          placeholder="placeholder succes"
          children={passIncon}
          type={"password"}
          success
        />
      </Stack>
    </Stack>
  );
};

export default Inputs;
