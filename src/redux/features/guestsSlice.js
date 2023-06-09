import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { db } from "../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { document_info } from "../../Utils/constants";

export const createGuest = createAsyncThunk(
  "guest/createGuest",
  async (
    { guest_name, description, show_in_ecommerce = true, onClose, reset },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const slug = guest_name.toLowerCase().replace(/ /g, "_");
      const new_guest = addDoc(collection(db, "guests"), {
        ...document_info,
        guest_name,
        description,
        show_in_ecommerce,
        slug,
      });

      await toast.promise(new_guest, {
        loading: "Creando...",
        success: "Invitacion creada",
        error: "Error al crear la invitacion",
      });

      dispatch(resetPage());
      dispatch(getdGuests({ isNextPage: false, isPrevPage: false }));

      onClose();
      reset();

      return new_guest;
    } catch (err) {
      toast.error(err.message);
      return rejectWithValue(err);
    }
  }
);

export const bulkCreateGuests = createAsyncThunk(
  "guest/bulkCreateGuests",
  async (guests) => {
    console.log("guests", guests);
    try {
      const guestsCollection = collection(db, "guests");
      // const batch = writeBatch(db);

      guests.forEach(async (guest) => {
        console.log("guest", guest);
        await addDoc(guestsCollection, {
          ...document_info,
          ...guest,
        });
        // batch.set(guestsCollection, { ...document_info, ...guest });

      });

      // await batch.commit();

      toast.success("Invitaciones creadas");

      return guests;
    } catch (err) {
      toast.error(err.message);
      // return rejectWithValue(err);
    }
  }
);

const getQuery = (guestsCollection, sort = "asc") => {
  return query(
    guestsCollection,
    where("active", "==", true),
    orderBy("guest_name", sort),
    limit(10)
  );
};

export const getdGuests = createAsyncThunk(
  "guest/getdGuests",
  async (
    { isNextPage, isPrevPage },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const guests = [];

      const guestsCollection = collection(db, "guests");
      const { lastVisible, firstVisible, guests: _guests } = getState().guest;

      let querySnapshot = null;

      if (!isNextPage && !isPrevPage) {
        const q = getQuery(guestsCollection);
        querySnapshot = await getDocs(q);
      }

      if (_guests.length === 0 && isPrevPage) {
        const q = getQuery(guestsCollection, "desc");
        querySnapshot = await getDocs(q);
        dispatch(resetPage());
      }

      // Get the last visible document

      if ((isNextPage || isPrevPage) && _guests.length !== 0) {
        const order_by = !isNextPage ? "desc" : "asc";
        // Construct a new query starting at this document,
        // get the next or prev 10 guests.
        const next = query(
          guestsCollection,
          where("active", "==", true),
          orderBy("guest_name", order_by),
          startAfter(isNextPage ? lastVisible : firstVisible),
          limit(10)
        );

        querySnapshot = await getDocs(next);
      }

      if (querySnapshot.docs.length > 0) {
        let lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        let firstDoc = querySnapshot.docs[0];

        if (isNextPage || isPrevPage) {
          lastDoc =
            querySnapshot.docs[isNextPage ? querySnapshot.docs.length - 1 : 0];
          firstDoc =
            querySnapshot.docs[isNextPage ? 0 : querySnapshot.docs.length - 1];
        }

        dispatch(setLastVisible(lastDoc));
        dispatch(setFirstVisible(firstDoc));
      }

      if (isPrevPage) querySnapshot = querySnapshot.docs.reverse();

      querySnapshot.forEach((doc) => {
        guests.push({ ...doc.data(), id: doc.id });
      });

      return guests;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      return rejectWithValue(err);
    }
  }
);

export const getGuest = createAsyncThunk(
  "guest/getGuest",
  async (guest_id, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "guests", guest_id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          ...docSnap.data(),
          id: docSnap.id,
          // event_state: event_states[2],
        };
      } else {
        toast.error("No se encontró la invitacion");
        return rejectWithValue("No se encontró la invitacion");
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getGuestByCode = createAsyncThunk(
  "guest/getGuestByCode",
  async ({ invitation_code }, { rejectWithValue }) => {
    try {
      const docRef = collection(db, "guests");
      const q = query(docRef, where("invitation_code", "==", invitation_code));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        const { updated_at, ...rest } = querySnapshot.docs[0].data();
        const docSnap = querySnapshot.docs[0];
        toast.success("Invitacion encontrada");
        return {
          ...rest,
          id: docSnap.id,
        };
      } else {
        toast.error("No se encontró la invitacion");
        return rejectWithValue("No se encontró la invitacion");
      }
    } catch (err) {
      console.log("err", err);
      return rejectWithValue(err);
    }
  }
);

export const getGuestAll = createAsyncThunk(
  "guest/getGuestAll",
  async ({}, { rejectWithValue }) => {
    try {
      const docRef = query(
        collection(db, "guests"),
        // where("active", "==", true),
        orderBy("general_name", "asc")
      );

      const q = query(docRef);

      const querySnapshot = await getDocs(q);
      const guests = [];

      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach((doc) => {
          const { updated_at, created_at, ...rest } = doc.data();
          guests.push({ ...rest });
        });
        return guests;
      }
      return guests;
    } catch (err) {
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);

export const changeStateGuest = createAsyncThunk(
  "guest/changeStateGuest",
  async ({ guest_id }, { dispatch, rejectWithValue }) => {
    try {
      const docRef = doc(db, "guests", guest_id);

      const updateTimestamp = updateDoc(docRef, {
        active: false,
        updated_at: new Date(),
      });

      await toast.promise(updateTimestamp, {
        loading: "Eliminando...",
        success: "Invitacion eliminada",
        error: "Error al eliminar la invitacion",
      });

      dispatch(resetPage());
      dispatch(getdGuests({ isNextPage: false, isPrevPage: false }));

      return docRef;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateGuest = createAsyncThunk(
  "guest/updateGuest",
  async ({ id, guests }, { dispatch, rejectWithValue, getState }) => {
    try {
      const { guest_by_code: _guests } = getState().guest;
      const guest = updateDoc(doc(db, "guests", id), {
        guests,
        registered: true,
        updated_at: new Date(),
      });

      await toast.promise(guest, {
        loading: "Actualizando...",
        success: "Invitacion confirmada",
        error: "Error al confirmar la invitacion",
      });

      dispatch(setGuesteByCode({ ..._guests, guests, registered: true }));

      return guest;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guest: null,
    guests: [],
    guest_by_code: null,
    guest_data_update: null,
    guest_selected: null,
    loading: false,
    loading_guest: true,
    loading_update_guest: false,
    loading_save_guest: false,
    isUpdate: false,
    error: null,
    firstVisible: null,
    lastVisible: null,
    page: 1,
  },
  reducers: {
    login: (state, action) => {
      state.guest = action.payload;
    },
    logout: (state) => {
      state.guest = null;
    },
    setIsUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
    setGuestSelected: (state, action) => {
      state.guest_selected = action.payload;
    },
    setGuesteByCode: (state, action) => {
      state.guest_by_code = action.payload;
    },

    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },

    resetPage: (state) => {
      state.page = 1;
    },

    setFirstVisible: (state, action) => {
      state.firstVisible = action.payload;
    },
    setLastVisible: (state, action) => {
      state.lastVisible = action.payload;
    },
  },

  extraReducers: {
    [createGuest.pending]: (state) => {
      state.loading = true;
    },
    [createGuest.fulfilled]: (state) => {
      state.loading = false;
      // state.guest = action.payload;
    },
    [createGuest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getdGuests.pending]: (state) => {
      state.loading_guest = true;
    },
    [getdGuests.fulfilled]: (state, action) => {
      state.loading_guest = false;
      state.guests = action.payload;
    },
    [getdGuests.rejected]: (state, action) => {
      state.loading_guest = false;
      state.error = action.payload;
    },

    [getGuest.pending]: (state) => {
      state.loading_update_guest = true;
    },
    [getGuest.fulfilled]: (state, action) => {
      state.loading_update_guest = false;
      state.guest_data_update = action.payload;
    },
    [getGuest.rejected]: (state, action) => {
      state.loading_update_guest = false;
      state.error = action.payload.message;
    },

    [getGuestByCode.pending]: (state) => {
      state.loading = true;
    },
    [getGuestByCode.fulfilled]: (state, action) => {
      state.loading = false;
      state.guest_by_code = action.payload;
    },
    [getGuestByCode.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getGuestAll.pending]: (state) => {
      state.loading_guest = true;
    },
    [getGuestAll.fulfilled]: (state, action) => {
      state.loading_guest = false;
      state.guest_by_code = action.payload;
    },
    [getGuestAll.rejected]: (state, action) => {
      state.loading_guest = false;
      state.error = action.payload;
    },

    [changeStateGuest.pending]: (state) => {
      state.loading_guest = true;
    },
    [changeStateGuest.fulfilled]: (state) => {
      state.loading_guest = false;
    },
    [changeStateGuest.rejected]: (state, action) => {
      state.loading_guest = false;
      state.error = action.payload.message;
    },

    [updateGuest.pending]: (state) => {
      state.loading_save_guest = true;
    },
    [updateGuest.fulfilled]: (state) => {
      state.loading_save_guest = false;
    },
    [updateGuest.rejected]: (state, action) => {
      state.loading_save_guest = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  login,
  logout,
  setIsUpdate,
  setGuestSelected,
  setGuesteByCode,
  nextPage,
  prevPage,
  setFirstVisible,
  setLastVisible,
  resetPage,
} = guestSlice.actions;

// selectors
export const selectGuest = (state) => state.guest.guest;
export const selectGuestByCode = (state) => state.guest.guest_by_code;
export const guestAll = (state) => state.guest.guest_by_code;
export const selectLoading = (state) => state.guest.loading;
export const selectdGuests = (state) => state.guest.guests;
export const selectLoadingdGuests = (state) => state.guest.loading_guest;
export const selectGuestDataUpdate = (state) => state.guest.guest_data_update;
export const selectLoadingupdateGuest = (state) =>
  state.guest.loading_update_guest;
export const selectGuestSelected = (state) => state.guest.guest_selected;
export const selectPage = (state) => state.guest.page;
export const selectIsUpdate = (state) => state.guest.isUpdate;
export const selectLoadingSaveGuest = (state) => state.guest.loading_save_guest;

export default guestSlice.reducer;
