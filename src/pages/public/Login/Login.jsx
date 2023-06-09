import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginToApp, selectLoading } from "../../../redux/features/userSlice";
import { Flex, Image, Stack, Show, Hide, Box, Center } from "@chakra-ui/react";
import { bg } from "../../../utils/Utils";
import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Login = () => {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => dispatch(loginToApp(data));

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Hide below="md">
        <Flex flex={1}>
          <Image
            borderRadius={"0px 14px 14px 0px"}
            alt={"Login Image"}
            objectFit={"cover"}
            src={bg}
          />
        </Flex>
      </Hide>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
              <Title content="¡Hola otra vez!" />
            </Center>
            <Center>
              <TextContent
                content="Bienvenido al admin de Eventia"
                gray
                marginBottom="12"
              />
            </Center>
            <InputFormValidation
              Icon={EmailIcon}
              placeholder="Ingresa tu correo"
              errors={errors}
              register={register}
              key_name="email"
              label="Escribe tu correo"
            />
            <InputFormValidation
              Icon={LockIcon}
              placeholder="Ingresa tu contraseña"
              errors={errors}
              register={register}
              key_name="password"
              label="Escribe tu contraseña"
              type="password"
              marginBottom="5"
            />
            <Button
              isLoading={loading}
              primary
              text="Entrar"
              type="submit"
              width="100%"
            />
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;
