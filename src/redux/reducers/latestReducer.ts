import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: undefined | null | string;
}

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: "",
};

export const latestBlogs = createAsyncThunk("/latestBlogs", async () => {
  const url = `https://django.kodaze.com/api/blogs/?limit=6`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

export const latestBlogsReducer = createSlice({
  name: "latestBlogsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(latestBlogs.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default latestBlogsReducer.reducer;
