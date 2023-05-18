import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const InputIcon = ({ placeholder, disabled, error, success, children, type="text" }) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        children={
          children
        }
      />
      <Input
        minHeight="48px"
        autoComplete="off"
        placeholder={placeholder}
        borderColor={
          error ? "brand.error" : success ? "brand.success" : "brand.gray"
        }
        _placeholder={{ color: "brand.gray" }}
        focusBorderColor={
          error ? "brand.error" : success ? "brand.success" : "brand.blueWhite"
        }
        style={{
          boxSizing: "border-box",
        }}
        _hover={{ borderColor: "brand.secundary" }}
        _disabled={{
          backgroundColor: "gray.100",
          cursor: "not-allowed",
        }}
        isDisabled={disabled}
        type={type}
      />
    </InputGroup>
  );
};

export default InputIcon;
