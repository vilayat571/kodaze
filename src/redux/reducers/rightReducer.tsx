import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  rData: any;
  loading: boolean;
  error: undefined | null | string;
}

const initialState: IInitialState = {
  rData: "",
  loading: false,
  error: "",
};

export const fetchRightSide = createAsyncThunk("/fetchRightSide", async () => {
  const url = `https://django.kodaze.com/api/blogs/?limit=6`;
  const res = await fetch(url);
  const rData = await res.json();
  return rData;
});

export const rightReducer = createSlice({
  name: "rightReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRightSide.fulfilled, (state, action) => {
      state.rData = action.payload.results;
    });
  },
});

export default rightReducer.reducer;
