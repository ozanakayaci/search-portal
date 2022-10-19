import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice.js";

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});
