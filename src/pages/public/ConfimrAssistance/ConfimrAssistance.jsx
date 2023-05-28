import { Flex } from "@chakra-ui/react";
import Logo from "../../../components/Logo/Logo";
import HeaderInfo from "../../../components/HeaderInfo/HeaderInfo";
import VerifyInvitation from "../../../components/VerifyInvitation/VerifyInvitation";

const ConfimrAssistance = () => {
  return (
    <Flex
      bgColor="brand.bgWhite"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <HeaderInfo />
      <Logo />
      <VerifyInvitation />
    </Flex>
  );
};

export default ConfimrAssistance;
