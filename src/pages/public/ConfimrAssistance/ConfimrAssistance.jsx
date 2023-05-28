import { useSelector } from "react-redux";
import { selectGuestByCode } from "../../../redux/features/guestsSlice";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Grid, GridItem, Switch, Text } from "@chakra-ui/react";
import FontText from "../../../components/Logo/FontText";
import Button from "../../../components/Buttons/Button";

const ConfimrAssistance = () => {
  const navigate = useNavigate();
  const selectGuest = useSelector(selectGuestByCode);
  const [guests, setGuests] = useState([]);

  const {
    general_name,
    guests: guests_data,
    table_number,
    // registered,
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
    console.log("confirm", guests);
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
    <Flex
      bgColor="landing.backgroundDark"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Grid
        templateAreas={`"mesa mesa" "titulo nombre" "tabla tabla" "total boton"`}
        gridTemplateRows={"70px 150px 1fr 70px"}
        gridTemplateColumns={`1fr 1fr`}
        bgColor="landing.background"
        w="900px"
        borderRadius="md"
        boxShadow="card"
        // gap={4}
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
            {" "}
            No Mesa: {table_number}
          </Text>
        </GridItem>

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
          {general_name &&
            general_name?.split(" ").map((name) => (
              <FontText key={name} fontSize="6xl" color="landing.textColor">
                {name}
              </FontText>
            ))}
        </GridItem>

        <GridItem
          gridArea="tabla"
          bgColor="brand.bgWhite"
          px="6"
          py="6"
          border="1px"
          borderColor="landing.textColor"
        >
          <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4}>
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
                  <Switch
                    colorScheme="green"
                    size="lg"
                    onChange={(e) => handleAttend(e, guest.id)}
                  />{" "}
                  <Text fontSize="lg" color="landing.textColor">
                    {guest.attend ? "Asistirá" : "No Asistirá"}
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
            {" "}
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
          <Button green text="Confirmar" onClick={handleOnConfirm} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ConfimrAssistance;
