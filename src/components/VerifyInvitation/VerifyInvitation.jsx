import { Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputFormValidation from "../Inputs/InputFormValidation/InputFormValidation";
import Button from "../Buttons/Button";

const VerifyInvitation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Flex flexDir="column" alignItems="center" mt="14">
      <Text color="landing.secondary" fontSize="3xl">
        Verifica tu invitacion
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="start" mt="5" gap="4">
          <InputFormValidation
            placeholder="Ingresa tu codigo de invitacion"
            errors={errors}
            register={register}
            key_name="invitation_code"
          />
          <Button type="submit" green text="Verificar" />
        </Flex>
      </form>
    </Flex>
  );
};

export default VerifyInvitation;
