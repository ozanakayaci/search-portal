import { createSlice } from "@reduxjs/toolkit";

import datas from "../mockData";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: JSON.parse(localStorage.getItem("dataLocal")) || [...datas.data],
    cols: [...datas.cols],
  },
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("dataLocal", JSON.stringify(state.data));
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
