import { Input } from "@chakra-ui/react";
import React from "react";

const InputSimple = ({ placeholder, disabled }) => {
  return (
    <Input
      minHeight="48px"
      autoComplete="off"
      placeholder={placeholder}
      borderColor="brand.gray"
      _placeholder={{ color: "brand.gray" }}
      focusBorderColor="brand.blueWhite"
      style={{
        boxSizing: "border-box",
      }}
      _hover={{ borderColor: "brand.secundary" }}
      _disabled={{
        backgroundColor: "gray.100",
        cursor: "not-allowed",
      }}
      isDisabled={disabled}
    />
  );
};

export default InputSimple;
