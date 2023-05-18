import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/button";

const Button = ({
  text = "Button",
  primary = false,
  secondary = false,
  green = false,
  disabled = false,
  type = "button",
  width = "200px",
  height = "48px",
  isLoading = false,
  mr = "0",
  textLoading = "Cargando...",
  onClick = () => {},
}) => {
  // Custom button
  const hover_style = {
    bg: "primary.600",
  };
  if (secondary) {
    hover_style.bg = "secondary.100";
  }
  if (green) {
    hover_style.bg = "green.600";
  }

  return (
    <ButtonChakra
      height={height}
      width={{ base: "100%", md: width }}
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      borderRadius="6px"
      fontSize="15px"
      fontWeight="semibold"
      mr={mr}
      bg={
        primary
          ? "primary.500"
          : secondary
          ? "secondary.500"
          : green
          ? "green.500"
          : ""
      }
      color={
        primary
          ? "brand.black"
          : secondary
          ? "brand.primary"
          : green
          ? "brand.secundary"
          : ""
      }
      _hover={hover_style}
      _active={{
        bg: primary
          ? "primary.300"
          : secondary
          ? "secondary.300"
          : green
          ? "green.300"
          : "",
        transform: "scale(0.98)",
        borderColor: "secondary.300",
      }}
      isDisabled={disabled}
      type={type}
      isLoading={isLoading}
      loadingText={textLoading}
      onClick={onClick}
    >
      {text}
    </ButtonChakra>
  );
};

export default Button;
