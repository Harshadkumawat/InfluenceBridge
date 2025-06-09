import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authservice from "./authservice";

export const AuthRegister = createAsyncThunk("AUTH/REGISTER", async (fromdata, thunkAPI) => {
  try {
    return await authservice.Registerservice(fromdata);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const AuthLogin = createAsyncThunk("AUTH/LOGIN", async (fromdata, thunkAPI) => {
  try {
    return await authservice.Loginservice(fromdata);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const AuthUpdateuser = createAsyncThunk("USER/UPDATE", async (fromdata, thunkAPI) => {
  try {
    return await authservice.updateservice(fromdata);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getLoginOut = createAsyncThunk("LOGOUT/AUTH", async () => {
  localStorage.removeItem("user");
});

const setuser = JSON.parse(localStorage.getItem("user"));

const authslice = createSlice({
  name: "auth",
  initialState: {
    users: setuser || null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(AuthRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(AuthRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Login
      .addCase(AuthLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(AuthLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Update
      .addCase(AuthUpdateuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthUpdateuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(AuthUpdateuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Logout
      .addCase(getLoginOut.fulfilled, (state) => {
        state.isSuccess = false;
        state.isError = false;
        state.isLoading = false;
        state.users = null;
        state.message = "";
      });
  },
});

export default authslice.reducer;
