import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  data: any;
  loading: boolean;
  error: string | undefined | null;
}

interface IServicesDetails {
  name: string;
  email: string;
  phone: any;
  cName: string;
  website: string;
  message: string;
  date: any;
  hour: any;
}

const initialState: IInitialState = {
  data: "",
  loading: false,
  error: null,
};

export const sendDetails = createAsyncThunk(
  "/sendDetails",
  async (formDetails: IServicesDetails) => {
    const url = "https://django.kodaze.com/api/contact/consultacy/";
    console.log("Form details", formDetails);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: formDetails.name,
        email: formDetails.email,
        phone: formDetails.phone,
        company_name: formDetails.cName,
        company_site: formDetails.website,
        message: formDetails.message,
        date: formDetails.date,
        time: formDetails.hour,
      }),
    });
  }
);

const servicesReducer = createSlice({
  name: "servicesReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendDetails.fulfilled, (state, action) => {
      console.log("Success");
    });
  },
});

export default servicesReducer.reducer;
