import { Flex } from "@chakra-ui/react";
import Logo from "../../../components/Logo/Logo";
import HeaderInfo from "../../../components/HeaderInfo/HeaderInfo";

const ConfimrAssistance = () => {
  return (
    <Flex bgColor="brand.bgWhite" minH="100vh" alignItems="center" justifyContent="center" flexDir="column">
      <HeaderInfo />
      <Logo />
    </Flex>
  );
};

export default ConfimrAssistance;
