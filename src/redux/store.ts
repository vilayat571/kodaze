import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import contactReducer from "./reducers/contactReducer";
import getBlogsReducer from "./reducers/getBlogsReducer";
import latestBlogsReducer from "./reducers/latestReducer";
import rightReducer from "./reducers/rightReducer";
import servicesReducer from "./reducers/servicesReducer";

export const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
    getBlogsReducer: getBlogsReducer,
    servicesReducer: servicesReducer,
    latestBlogsReducer: latestBlogsReducer,
    rightReducer: rightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
