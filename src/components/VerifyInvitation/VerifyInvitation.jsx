import { Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputFormValidation from "../Inputs/InputFormValidation/InputFormValidation";
import Button from "../Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getGuestByCode,
  selectGuestByCode,
  selectLoading,
} from "../../redux/features/guestsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyInvitation = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const selectGuest = useSelector(selectGuestByCode);

  const onSubmit = (data) => {
    dispatch(getGuestByCode(data));
  };

  useEffect(() => {
    if (selectGuest) {
      navigate("/confirmar-asistencia");
    }
  }, [selectGuest]);

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
          <Button
            type="submit"
            green
            text="Verificar"
            isLoading={loading}
            textLoading="verificando"
          />
        </Flex>
      </form>
    </Flex>
  );
};

export default VerifyInvitation;
