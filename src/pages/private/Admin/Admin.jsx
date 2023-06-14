import { Box, Container, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HeaderAdmin from "../../../components/HeaderInfo/HeaderAdmin";
import Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  bulkCreateGuests,
  getGuestAll,
  guestAll,
  selectLoadingdGuests,
} from "../../../redux/features/guestsSlice";
import Button from "../../../components/Buttons/Button";
import { guests_bulk } from "../../../Utils/guests";

const Admin = () => {
  const selectGuest = useSelector(guestAll);
  const loading_guest = useSelector(selectLoadingdGuests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuestAll(""));
  }, []);

  const handleBulkCreateGuests = () => {
    dispatch(bulkCreateGuests(guests_bulk));
  };

  return (
    <>
      <Box p="0 10px 0 10px" m="0">
        <HeaderAdmin title="INVITADOS" textButton="Agregar Invitado" />

        <Button text="Bulk Agregar Invitado" primary onClick={handleBulkCreateGuests} />

        <Container maxW={"full"} p="0" mt={12}>
          {loading_guest ? (
            <Flex flexWrap="wrap" gridGap={15} justify="center">
              <Skeleton
                maxW={{ base: "full", xl: "49%" }}
                h={"400px"}
                w={"full"}
                boxShadow="card"
                borderWidth="1px"
                borderRadius="24px"
                p="35px 45px 35px 45px"
              />

              <Skeleton
                maxW={{ base: "full", xl: "49%" }}
                h={"400px"}
                w={"full"}
                boxShadow="card"
                borderWidth="1px"
                borderRadius="24px"
                p="35px 45px 35px 45px"
              />

              <Skeleton
                maxW={{ base: "full", xl: "49%" }}
                h={"400px"}
                w={"full"}
                boxShadow="card"
                borderWidth="1px"
                borderRadius="24px"
                p="35px 45px 35px 45px"
              />

              <Skeleton
                maxW={{ base: "full", xl: "49%" }}
                h={"400px"}
                w={"full"}
                boxShadow="card"
                borderWidth="1px"
                borderRadius="24px"
                p="35px 45px 35px 45px"
              />
            </Flex>
          ) : (
            <Flex flexWrap="wrap" gridGap={15} justify="center">
              {selectGuest &&
                selectGuest.length > 0 &&
                selectGuest.map((data, i) => {
                  return (
                    <Card
                      key={i}
                      family={
                        `Familia ${data.general_name}` || `Familia ${i + 1}`
                      }
                      invitationCode={data.invitation_code || "Sin Codigo"}
                      tableNumber={data.table_number || "Sin número de mesa"}
                      data={data.guests || []}
                      registered={data.registered}
                    />
                  );
                })}
            </Flex>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Admin;
