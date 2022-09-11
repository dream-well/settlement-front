import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    menuState: "show"
}

// Actual Slice
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {

    // Action to set the menuentication status
    setMenuState(state, action) {
      state.menuState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.menu,
        };
      },
    },

  },
});

export const { setMenuState } = menuSlice.actions;

export const selectMenuState = (state) => state.menu.menuState;

export default menuSlice.reducer;