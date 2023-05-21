import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { auth, db } from "../../firebase/config";
import { toast } from "react-hot-toast";

export const loginToApp = createAsyncThunk(
  "user/loginToApp",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const user_auth = await signInWithEmailAndPassword(auth, email, password);

      const docRef = doc(db, "users", user_auth.user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (docSnap.data().active) {
          return {
            email: user_auth.user.email,
            uid: user_auth.user.uid,
            displayName: user_auth.user.displayName,
            photoUrl: user_auth.user.photoURL,
            ...docSnap.data(),
          };
        } else {
          toast.error("Lo sentimos, tu cuenta ha sido desactivada");
          auth.signOut();
          dispatch(logout());
        }
      } else {
        toast.error("No se encontró el usuario");
        auth.signOut();
        dispatch(logout());
      }
    } catch (err) {
      toast.error(err.message);
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

  extraReducers: {
    [loginToApp.pending]: (state) => {
      state.loading = true;
    },
    [loginToApp.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginToApp.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
