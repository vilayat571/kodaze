import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: string | undefined | null;
};

interface IForm {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
};

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: null,
};



export const sendData = createAsyncThunk("/sendData", async (form: IForm) => {
  const url = "https://django.kodaze.com/api/contact/";
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      fullname: form.name,
      email: form.email,
      phone: form.number,
      subject: form.subject,
      message: form.message,
    }),
  });
});

const contactReducer = createSlice({
  name: "contactReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default contactReducer.reducer;
