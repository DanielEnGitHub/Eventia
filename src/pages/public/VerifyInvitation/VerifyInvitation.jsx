import { Flex } from "@chakra-ui/react";
import Logo from "../../../components/Logo/Logo";
import HeaderInfo from "../../../components/HeaderInfo/HeaderInfo";
import VerifyInvitationComponent from "../../../components/VerifyInvitation/VerifyInvitation";

const VerifyInvitation = () => {
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
      <VerifyInvitationComponent />
    </Flex>
  );
};

export default VerifyInvitation;
