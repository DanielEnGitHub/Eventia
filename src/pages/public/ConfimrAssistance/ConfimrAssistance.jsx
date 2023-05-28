import { useDispatch, useSelector } from "react-redux";
import {
  selectGuestByCode,
  selectLoadingSaveGuest,
  updateGuest,
} from "../../../redux/features/guestsSlice";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Grid,
  GridItem,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import FontText from "../../../components/Logo/FontText";
import Button from "../../../components/Buttons/Button";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";
import InvitationCard from "../../../components/InvitationCard/InvitationCard";

const ConfimrAssistance = () => {
  const navigate = useNavigate();
  const selectGuest = useSelector(selectGuestByCode);
  const [guests, setGuests] = useState([]);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loadingSaveGuest = useSelector(selectLoadingSaveGuest);

  const {
    id,
    general_name,
    guests: guests_data,
    table_number,
    registered,
  } = selectGuest || {};

  const handleAttend = (e, id) => {
    const newGuests = guests.map((guest) => {
      if (guest.id === id) {
        return {
          ...guest,
          attend: e.target.checked,
        };
      }
      return guest;
    });
    setGuests(newGuests);
  };

  const handleOnConfirm = () => {
    dispatch(updateGuest({ id, guests }));
    onClose();
  };

  useEffect(() => {
    if (guests_data) {
      setGuests(guests_data);
    }
    if (!selectGuest) {
      navigate("/verificar-invitacion");
    }
  }, [selectGuest]);

  return (
    <>
      <ModalAlert
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        subTitleText="¿Estás seguro de confirmar la asistencia?"
        description="Verifica que todos los invitados esten en la lista y confirma la asistencia de cada uno."
        onContinue={handleOnConfirm}
      />
      <Flex
        bgColor="landing.backgroundDark"
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        {/* <InvitationCard /> */}
        <Grid
          templateAreas={{
            base: `"mesa" "titulo" "nombre" "tabla" "total" "boton"`,
            md: `"mesa mesa" "${
              registered ? "nombre nombre" : "titulo nombre"
            }" "tabla tabla" "total boton"`,
          }}
          gridTemplateRows={{
            base: "70px 150px 150px 1fr 70px 70px",
            md: "70px 150px 1fr 70px",
          }}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          bgColor="landing.background"
          w="900px"
          borderRadius="md"
          boxShadow="card"
          // gap={4}
          maxWidth="95vw"
          overflowX="auto"
          p="7"
        >
          <GridItem
            gridArea="mesa"
            bgColor="brand.bgWhite"
            px="6"
            mb="20px"
            display="flex"
            alignItems="center"
          >
            <Text fontSize="2xl" color="landing.textColor">
              No Mesa: {table_number}
            </Text>
          </GridItem>

          {!registered && (
            <GridItem
              gridArea="titulo"
              bgColor="brand.bgWhite"
              border="1px"
              px="6"
              borderColor="landing.textColor"
              display="flex"
              flexDir="column"
              justifyContent="center"
            >
              <FontText fontSize="6xl" color="landing.textColor">
                Confirmar
              </FontText>
              <FontText fontSize="6xl" color="landing.textColor">
                Asistencia
              </FontText>
            </GridItem>
          )}

          <GridItem
            gridArea="nombre"
            bgColor="brand.bgWhite"
            border="1px"
            px="6"
            borderColor="landing.textColor"
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            {!registered &&
              general_name &&
              general_name?.split(" ").map((name) => (
                <FontText key={name} fontSize="6xl" color="landing.textColor">
                  {name}
                </FontText>
              ))}

            {registered && (
              <FontText fontSize="6xl" color="landing.textColor">
                {general_name}
              </FontText>
            )}
          </GridItem>

          <GridItem
            gridArea="tabla"
            bgColor="brand.bgWhite"
            px="6"
            py="6"
            border="1px"
            borderColor="landing.textColor"
            maxWidth="95vw"
            overflowX="auto"
          >
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4} minW="300px">
              <GridItem gridColumn="1/3">
                <Text fontSize="lg" color="landing.textColor">
                  Nombre
                </Text>
              </GridItem>
              <GridItem gridColumn="3/4">
                <Text fontSize="lg" color="landing.textColor">
                  Confirmar Asistencia
                </Text>
              </GridItem>

              {guests.map((guest, index) => (
                <React.Fragment key={index}>
                  <GridItem gridColumn="1/3">
                    <Text fontSize="2xl" color="landing.textColor">
                      {guest.full_name}
                    </Text>
                  </GridItem>
                  <GridItem gridColumn="3/4" display="flex" gap="3">
                    {!registered && (
                      <Switch
                        colorScheme="green"
                        size="lg"
                        onChange={(e) => handleAttend(e, guest.id)}
                        isChecked={guest.attend}
                      />
                    )}
                    <Text
                      fontSize="lg"
                      color="landing.textColor"
                      opacity={guest.attend ? "1" : "0.7"}
                      fontWeight={guest.attend ? "bold" : "normal"}
                    >
                      {guest.attend
                        ? registered
                          ? "Si Asistirá"
                          : "Asistirá"
                        : "No Asistirá"}
                    </Text>
                  </GridItem>
                </React.Fragment>
              ))}
            </Grid>
          </GridItem>

          <GridItem
            gridArea="total"
            bgColor="brand.bgWhite"
            px="6"
            mt="20px"
            display="flex"
            alignItems="center"
          >
            <Text fontSize="2xl" color="landing.textColor">
              Asistiran: {guests.filter((guest) => guest.attend).length} /{" "}
              {guests.length}
            </Text>
          </GridItem>

          <GridItem
            gridArea="boton"
            bgColor="brand.bgWhite"
            mt="20px"
            display="flex"
            alignItems="center"
            justifyContent="end"
            px="6"
          >
            {!registered && (
              <Button
                green
                text="Confirmar"
                onClick={onOpen}
                isLoading={loadingSaveGuest}
              />
            )}
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default ConfimrAssistance;
