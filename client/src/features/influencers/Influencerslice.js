import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import influencerservice from "./influencerservice";

const influencreslice = createSlice({
  name: "influencer",
  initialState: {
    influencer: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    Message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetSingleIngluencers.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(GetSingleIngluencers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.influencer = action.payload;
      })
      .addCase(GetSingleIngluencers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.Message = action.payload;
      });
  },
});

export default influencreslice.reducer;

export const GetSingleIngluencers = createAsyncThunk(
  "GETSINGLE/INFLULENCERS",
  async (id, thunkAPI) => {
    try {
      return await influencerservice.getsingleinfluencre(id);
    } catch (error) {
      console.log(error.response.data.message);
      const messagee = error.response.data.message;
      return thunkAPI.rejectWithValue(messagee);
    }
  }
);
