import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Title from "../Texts/Title";
import TextContent from "../Texts/TextContent";
import Button from "../Buttons/Button";



const ModalAlert = ({
  subTitleText,
  description,
  emphasisDescription,
  isOpen,
  onClose,
  onContinue,
}) => {
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        // leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={{ base: "full", md: "2xl" }}
      >
        <AlertDialogOverlay
          bg="rgba(0, 0, 0, 0.2)"
          backdropFilter="auto"
          backdropBlur="3px"
          boxShadow="0px 0px 0px 1000px rgba(0, 0, 0, 0.2)"
        />

        <AlertDialogContent py="14" px={{ base: "5", md: "8" }}>
          <AlertDialogHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="8"
          >
            <Flex justifyContent="center" gap="5">
              <WarningTwoIcon boxSize={50} color="brand.warning" mt="3" />
              <Title black content="¡Atencion!" />
            </Flex>
            <TextContent content={subTitleText} gray />
          </AlertDialogHeader>
          {/* <AlertDialogCloseButton /> */}
          <AlertDialogBody minHeight="10vh">
            <TextContent>
              {description}
              <strong>{emphasisDescription}</strong>
            </TextContent>
          </AlertDialogBody>
          <AlertDialogFooter
            display="flex"
            flexDirection={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            gap={{ base: 4, md: 0 }}
          >
            <Button secondary onClick={onClose} text="Cancelar" />
            <Button
              green
              text="Continuar"
              onClick={() => {
                onClose();
                onContinue();
              }}
            />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ModalAlert;
