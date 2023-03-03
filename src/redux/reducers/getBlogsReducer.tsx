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

export const fetchBlogs = createAsyncThunk("/fetchBlogs", async (parts:any) => {
  const {limit,query}=parts;
    const url = `https://django.kodaze.com/api/blogs/?limit=${limit}&name=&name__icontains=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

export const getBlogsReducer = createSlice({
  name: "getBlogsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  },
});

export default getBlogsReducer.reducer;
