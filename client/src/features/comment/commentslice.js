import { act } from "react";
import commentservice from "./commentservice";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const commentslice = createSlice({
  name: "comment",
  initialState: {
    usercomment: [],
    commentLoading: false,
    commentError: false,
    commentsuccess: false,
    commentMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllCommentUser.pending, (state, action) => {
        state.commentLoading = true;
        state.commentError = false;
        state.commentsuccess = false;
      })
      .addCase(GetAllCommentUser.fulfilled, (state, action) => {
        state.commentLoading = false;
        state.commentError = false;
        state.commentsuccess = true;
        state.usercomment = action.payload;
      })
      .addCase(GetAllCommentUser.rejected, (state, action) => {
        state.commentLoading = false;
        state.commentError = true;
        state.commentsuccess = false;
        state.commentMessage = action.payload;
      })

      .addCase(AddCommentUser.pending, (state, action) => {
        state.commentLoading = true;
        state.commentError = false;
        state.commentsuccess = false;
      })
      .addCase(AddCommentUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.commentLoading = false;
        state.commentError = false;
        state.commentsuccess = true;
        state.usercomment = [action.payload, ...state.usercomment];
      })
      .addCase(AddCommentUser.rejected, (state, action) => {
        state.commentLoading = false;
        state.commentError = true;
        state.commentsuccess = false;
        state.commentMessage = action.payload;
      });
  },
});

export default commentslice.reducer;
export const GetAllCommentUser = createAsyncThunk(
  "GET/COMMENTUSER",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.users.token;

    try {
      return await commentservice.getallcommentuser(id, token);
    } catch (error) {
      console.log(error.response.data.message);
      const messagee = error.response.data.message;
      return thunkAPI.rejectWithValue(messagee);
    }
  }
);
export const AddCommentUser = createAsyncThunk(
  "GET/ADDCOMEMTN USER",
  async (formdata, thunkAPI) => {
    let token = thunkAPI.getState().auth.users.token;

    try {
      return await commentservice.addcommentuser(formdata, token);
    } catch (error) {
      console.log(error.response.data.message);
      const messagee = error.response.data.message;
      return thunkAPI.rejectWithValue(messagee);
    }
  }
);
