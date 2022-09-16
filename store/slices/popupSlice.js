import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  popupSate: true,
};

// Actual Slice
export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {

    // Action to set the authentication status
    setpopupSate(state, action) {
      state.popupSate = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.popup,
        };
      },
    },

  },
});

export const { setpopupSate } = popupSlice.actions;

export const selectpopupSate = (state) => state.popup.popupSate;

export default popupSlice.reducer;