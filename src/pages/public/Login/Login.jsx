import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { loginToApp, selectLoading } from "../../../redux/features/userSlice";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
// import { PasswordIcon, PerfilIcon } from "../../../Utils/icons.js";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
// const regEmail =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title content="¡Hola otra vez!" />
          <TextContent
            content="Bienvenido al admin de Eventia"
            gray
            marginBottom="12"
          />
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
        <TextContent content="Diseño y desarollo Daniel & Pablo" gray small />
      </div>
    </div>
  );
};

export default Login;
