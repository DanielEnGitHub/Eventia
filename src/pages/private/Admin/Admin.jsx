import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HeaderAdmin from "../../../components/HeaderInfo/HeaderAdmin";
import Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getGuestAll, guestAll } from "../../../redux/features/guestsSlice";

const Admin = () => {
  const selectGuest = useSelector(guestAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuestAll(""));
  }, []);

  return (
    <>
      <Box p="0 10px 0 10px" m="0">
        <HeaderAdmin title="INVITADOS" textButton="Agregar Invitado" />

        <Container maxW={"full"} p="0" mt={12}>
          <Flex flexWrap="wrap" gridGap={15} justify="center">
            {selectGuest &&
              selectGuest.length > 0 &&
              selectGuest.map((data, i) => {
                return (
                  <Card
                    family={
                      `Familia ${data.general_name}` || `Familia ${i + 1}`
                    }
                    invitationCode={data.invitation_code || "Sin Codigo"}
                    tableNumber={data.table_number || "Sin número de mesa"}
                    data={data.guests || []}
                  />
                );
              })}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Admin;
